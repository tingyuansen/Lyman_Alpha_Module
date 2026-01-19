/**
 * Data Loader for Lyman-Alpha Forest
 * Loads bundled, compressed cache data instead of individual files
 */

var CacheData = {
    loaded: {},  // Loaded bundles keyed by "z_quasar_column_density"
    currentZQuasar: null,
    currentColDen: null,
    
    // Load a bundle for given z_quasar and column_density
    loadBundle: function(z_quasar, col_den, callback) {
        var bundleKey = z_quasar + "_" + col_den;
        
        // Already loaded?
        if (this.loaded[bundleKey]) {
            callback(this.loaded[bundleKey]);
            return;
        }
        
        var self = this;
        var url = "data/bundles/cache_" + bundleKey + ".json.gz";
        
        // Fetch and decompress
        fetch(url)
            .then(function(response) {
                if (!response.ok) throw new Error("Bundle not found: " + url);
                return response.arrayBuffer();
            })
            .then(function(buffer) {
                // Decompress using pako
                var decompressed = pako.ungzip(new Uint8Array(buffer), {to: 'string'});
                var data = JSON.parse(decompressed);
                self.loaded[bundleKey] = data;
                callback(data);
            })
            .catch(function(err) {
                console.error("Failed to load bundle:", err);
                callback(null);
            });
    },
    
    // Get data for specific parameters
    getData: function(z_quasar, col_den, z_beta, hi_alpha, callback) {
        var self = this;
        this.loadBundle(z_quasar, col_den, function(bundle) {
            if (!bundle) {
                callback(null);
                return;
            }
            var dataKey = z_beta + "_" + hi_alpha;
            var data = bundle[dataKey];
            if (data) {
                // Set global variables like the original code expects
                window.z_quasar = data.z_quasar || [parseFloat(z_quasar)];
                window.data_x_2 = data.data_x_2 || [];
                window.data_y_2 = data.data_y_2 || [];
                window.data_y_2_alpha = data.data_y_2_alpha || [];
                window.data_y_2_beta = data.data_y_2_beta || [];
                window.data_y_2_gamma = data.data_y_2_gamma || [];
                window.data_y_2_limit = data.data_y_2_limit || [];
                window.data_y_2_quasar = data.data_y_2_quasar || [];
                window.data_y_2_subtract = data.data_y_2_subtract || [];
                window.data_y_2_subtract_alpha = data.data_y_2_subtract_alpha || [];
                window.data_y_2_subtract_beta = data.data_y_2_subtract_beta || [];
                window.data_y_2_subtract_gamma = data.data_y_2_subtract_gamma || [];
                window.data_y_2_subtract_limit = data.data_y_2_subtract_limit || [];
                callback(data);
            } else {
                console.error("Data not found for key:", dataKey);
                callback(null);
            }
        });
    }
};

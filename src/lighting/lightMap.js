/**
 A **LightMap** specifies a cube texture light map.

 ## Usage

 ````javascript

 new xeogl.LightMap({
    src: [
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PX.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NX.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PY.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NY.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_PZ.png",
        "textures/light/Uffizi_Gallery/Uffizi_Gallery_Irradiance_NZ.png"
    ]
 });
 ````
 @class LightMap
 @module xeogl
 @submodule lighting
 @constructor
 @param [scene] {Scene} Parent {{#crossLink "Scene"}}Scene{{/crossLink}} - creates this LightMap in the default
 {{#crossLink "Scene"}}Scene{{/crossLink}} when omitted.
 @param [cfg] {*} Configs
 @param [cfg.id] {String} Optional ID for this LightMap, unique among all components in the parent scene, generated automatically when omitted.
 @param [cfg.meta] {String:Object} Optional map of user-defined metadata to attach to this LightMap.
 @param [cfg.src=null] {Array of String} Paths to six image files to load into this LightMap.
 @param [cfg.flipY=false] {Boolean} Flips this LightMap's source data along its vertical axis when true.
 @param [cfg.encoding="linear"] {String} Encoding format.  See the {{#crossLink "LightMap/encoding:property"}}{{/crossLink}} property for more info.
 @extends Component
 */
(function () {

    "use strict";

    xeogl.LightMap = xeogl.CubeTexture.extend({
        type: "xeogl.LightMap",
        _init: function (cfg) {
            this._super(cfg);
            this._renderer.lights.addLightMap(this._state);
        },

        _destroy: function () {
            this._renderer.lights.removeLightMap(this._state);
            this._super(cfg);
        }
    });

})();
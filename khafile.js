let project = new Project('ArmorPaint');

project.addSources('Sources');
project.addLibrary("armory");
project.addLibrary("iron");
project.addLibrary("zui");
project.addLibrary("iron_format");
project.addShaders("compiled/Shaders/*.glsl", { noembed: false});
project.addShaders("compiled/Hlsl/*.glsl", { noprocessing: true, noembed: false });
project.addAssets("compiled/Assets/**", { notinlist: true , destination: "data/{name}" });
project.addAssets("compiled/Shaders/*.arm", { notinlist: true , destination: "data/{name}" });
project.addAssets("Bundled/**", { notinlist: true , destination: "data/{name}" });
project.addAssets("Libraries/armory/Assets/brdf.png", { notinlist: true , destination: "data/{name}" });
project.addAssets("Libraries/armory/Assets/noise256.png", { notinlist: true , destination: "data/{name}" });
project.addAssets("Libraries/armory/Assets/smaa_area.png", { notinlist: true , destination: "data/{name}" });
project.addAssets("Libraries/armory/Assets/smaa_search.png", { notinlist: true , destination: "data/{name}" });
project.addAssets("Libraries/armory/Assets/font_default.ttf", { notinlist: false , destination: "data/{name}" });
project.addDefine('arm_deferred');
project.addDefine('arm_voxelgi_revox');
project.addDefine('arm_ltc');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=TAA');
project.addDefine('arm_veloc');
project.addDefine('arm_taa');
project.addDefine('rp_supersampling=4');
project.addDefine('rp_ssgi=RTAO');
project.addDefine('rp_bloom');
project.addDefine('rp_ssr');
project.addDefine('rp_overlays');
project.addDefine('rp_voxelao');
project.addDefine('rp_voxelgi_resolution=256');
project.addDefine('rp_voxelgi_resolution_z=1.0');
project.addDefine('rp_gbuffer2');
project.addDefine('arm_appwh');
project.addDefine('arm_skip_envmap');
project.addDefine('arm_no_audio');
project.addDefine('kha_no_ogg');
project.addDefine('arm_soundcompress');
project.addDefine('arm_ui');
project.addDefine('arm_skin');
project.addDefine('arm_particles');
project.addDefine('arm_config');
project.addDefine('arm_resizable');
project.addDefine('arm_data_dir');
project.addParameter('--macro include("arm.brushnode")');
project.addParameter('-dce full');

resolve(project);

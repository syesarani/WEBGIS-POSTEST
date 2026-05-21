var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
                title: '<img src="styles/legend/kecamatan_genteng_ar_1.png" /> kecamatan_genteng_ar'
            });
var format_service_area_lines_2 = new ol.format.GeoJSON();
var features_service_area_lines_2 = format_service_area_lines_2.readFeatures(json_service_area_lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_service_area_lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_service_area_lines_2.addFeatures(features_service_area_lines_2);
var lyr_service_area_lines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_service_area_lines_2, 
                style: style_service_area_lines_2,
                popuplayertitle: 'service_area_lines',
                interactive: true,
                title: '<img src="styles/legend/service_area_lines_2.png" /> service_area_lines'
            });
var format_halte_pt_3 = new ol.format.GeoJSON();
var features_halte_pt_3 = format_halte_pt_3.readFeatures(json_halte_pt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_3.addFeatures(features_halte_pt_3);
var lyr_halte_pt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_3, 
                style: style_halte_pt_3,
                popuplayertitle: 'halte_pt',
                interactive: true,
    title: 'halte_pt<br />\
    <img src="styles/legend/halte_pt_3_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/halte_pt_3_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/halte_pt_3_2.png" /> Halte Basra<br />\
    <img src="styles/legend/halte_pt_3_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/halte_pt_3_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/halte_pt_3_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/halte_pt_3_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/halte_pt_3_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/halte_pt_3_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/halte_pt_3_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/halte_pt_3_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/halte_pt_3_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/halte_pt_3_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/halte_pt_3_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/halte_pt_3_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/halte_pt_3_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/halte_pt_3_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/halte_pt_3_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/halte_pt_3_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/halte_pt_3_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/halte_pt_3_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/halte_pt_3_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/halte_pt_3_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/halte_pt_3_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/halte_pt_3_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/halte_pt_3_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/halte_pt_3_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/halte_pt_3_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/halte_pt_3_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/halte_pt_3_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/halte_pt_3_30.png" /> Halte PMI<br />\
    <img src="styles/legend/halte_pt_3_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/halte_pt_3_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/halte_pt_3_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/halte_pt_3_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/halte_pt_3_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/halte_pt_3_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/halte_pt_3_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/halte_pt_3_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/halte_pt_3_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/halte_pt_3_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/halte_pt_3_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/halte_pt_3_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/halte_pt_3_43.png" /> Halte Yos Sudarso<br />\
    <img src="styles/legend/halte_pt_3_44.png" /> <br />' });
var format_HALTEJOINhalte_pt_4 = new ol.format.GeoJSON();
var features_HALTEJOINhalte_pt_4 = format_HALTEJOINhalte_pt_4.readFeatures(json_HALTEJOINhalte_pt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HALTEJOINhalte_pt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HALTEJOINhalte_pt_4.addFeatures(features_HALTEJOINhalte_pt_4);
cluster_HALTEJOINhalte_pt_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_HALTEJOINhalte_pt_4
});
var lyr_HALTEJOINhalte_pt_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HALTEJOINhalte_pt_4, 
                style: style_HALTEJOINhalte_pt_4,
                popuplayertitle: 'HALTE JOIN — halte_pt',
                interactive: true,
    title: 'HALTE JOIN — halte_pt<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_2.png" /> Halte Basra<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_30.png" /> Halte PMI<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_43.png" /> Halte Yos Sudarso<br />\
    <img src="styles/legend/HALTEJOINhalte_pt_4_44.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_service_area_lines_2.setVisible(true);lyr_halte_pt_3.setVisible(true);lyr_HALTEJOINhalte_pt_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kecamatan_genteng_ar_1,lyr_service_area_lines_2,lyr_halte_pt_3,lyr_HALTEJOINhalte_pt_4];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'LUAS': 'LUAS', 'TOTAL': 'TOTAL', });
lyr_service_area_lines_2.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_HALTEJOINhalte_pt_4.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', 'RUTE': 'RUTE', 'Destinasi': 'Destinasi', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'LUAS': '', 'TOTAL': '', });
lyr_service_area_lines_2.set('fieldImages', {'fid': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_halte_pt_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__Nama_Halte': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_HALTEJOINhalte_pt_4.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__Nama_Halte': 'TextEdit', 'RUTE': 'TextEdit', 'Destinasi': 'TextEdit', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'LUAS': 'hidden field', 'TOTAL': 'hidden field', });
lyr_service_area_lines_2.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Informasi Halte__Nama_Halte': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_HALTEJOINhalte_pt_4.set('fieldLabels', {'fid': 'hidden field', 'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Informasi Halte__Nama_Halte': 'hidden field', 'RUTE': 'inline label - always visible', 'Destinasi': 'inline label - always visible', });
lyr_HALTEJOINhalte_pt_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
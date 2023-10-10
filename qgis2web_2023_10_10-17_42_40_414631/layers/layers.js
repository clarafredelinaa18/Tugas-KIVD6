var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaMalang_1 = new ol.format.GeoJSON();
var features_KotaMalang_1 = format_KotaMalang_1.readFeatures(json_KotaMalang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMalang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMalang_1.addFeatures(features_KotaMalang_1);
var lyr_KotaMalang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaMalang_1, 
                style: style_KotaMalang_1,
                interactive: true,
                title: '<img src="styles/legend/KotaMalang_1.png" /> Kota Malang'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_JembatandiMalang_3 = new ol.format.GeoJSON();
var features_JembatandiMalang_3 = format_JembatandiMalang_3.readFeatures(json_JembatandiMalang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JembatandiMalang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JembatandiMalang_3.addFeatures(features_JembatandiMalang_3);
var lyr_JembatandiMalang_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JembatandiMalang_3, 
                style: style_JembatandiMalang_3,
                interactive: true,
                title: '<img src="styles/legend/JembatandiMalang_3.png" /> Jembatan di Malang'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaMalang_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_JembatandiMalang_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaMalang_1,lyr_Jalan_2,lyr_JembatandiMalang_3];
lyr_KotaMalang_1.set('fieldAliases', {'qc_id': 'qc_id', 'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Jalan_2.set('fieldAliases', {'qc_id': 'qc_id', 'namrjl': 'namrjl', 'konrjl': 'konrjl', 'matrjl': 'matrjl', 'fgsrjl': 'fgsrjl', 'utkrjl': 'utkrjl', 'tolrjl': 'tolrjl', 'wlyrjl': 'wlyrjl', 'autrjl': 'autrjl', 'klsrjl': 'klsrjl', 'spcrjl': 'spcrjl', 'jparjl': 'jparjl', 'arhrjl': 'arhrjl', 'starjl': 'starjl', 'kllrjl': 'kllrjl', 'medrjl': 'medrjl', 'locrjl': 'locrjl', 'jarrjl': 'jarrjl', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', });
lyr_JembatandiMalang_3.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'tipjmb': 'tipjmb', 'fgsjmb': 'fgsjmb', 'tonjmb': 'tonjmb', 'tggjmb': 'tggjmb', 'lbrjmb': 'lbrjmb', 'matjmb': 'matjmb', 'strjmb': 'strjmb', 'dekjmb': 'dekjmb', 'btsjmb': 'btsjmb', 'ayujmb': 'ayujmb', 'jbtjmb': 'jbtjmb', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', });
lyr_KotaMalang_1.set('fieldImages', {'qc_id': 'TextEdit', 'kdppum': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'kdpbps': 'TextEdit', 'fcode': 'TextEdit', 'luaswh': 'TextEdit', 'uupp': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdbbps': 'TextEdit', 'kdbpum': 'TextEdit', 'wadmkd': 'TextEdit', 'wiadkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wiadkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wiadkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadpr': 'TextEdit', 'tipadm': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'qc_id': 'TextEdit', 'namrjl': 'TextEdit', 'konrjl': 'TextEdit', 'matrjl': 'TextEdit', 'fgsrjl': 'TextEdit', 'utkrjl': 'TextEdit', 'tolrjl': 'TextEdit', 'wlyrjl': 'TextEdit', 'autrjl': 'TextEdit', 'klsrjl': 'TextEdit', 'spcrjl': 'TextEdit', 'jparjl': 'TextEdit', 'arhrjl': 'TextEdit', 'starjl': 'TextEdit', 'kllrjl': 'TextEdit', 'medrjl': 'TextEdit', 'locrjl': 'TextEdit', 'jarrjl': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_JembatandiMalang_3.set('fieldImages', {'qc_id': 'TextEdit', 'namobj': 'TextEdit', 'tipjmb': 'TextEdit', 'fgsjmb': 'TextEdit', 'tonjmb': 'TextEdit', 'tggjmb': 'TextEdit', 'lbrjmb': 'TextEdit', 'matjmb': 'TextEdit', 'strjmb': 'TextEdit', 'dekjmb': 'TextEdit', 'btsjmb': 'TextEdit', 'ayujmb': 'TextEdit', 'jbtjmb': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', });
lyr_KotaMalang_1.set('fieldLabels', {'qc_id': 'no label', 'kdppum': 'no label', 'namobj': 'no label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'no label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'header label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'qc_id': 'no label', 'namrjl': 'no label', 'konrjl': 'no label', 'matrjl': 'no label', 'fgsrjl': 'no label', 'utkrjl': 'no label', 'tolrjl': 'no label', 'wlyrjl': 'no label', 'autrjl': 'no label', 'klsrjl': 'no label', 'spcrjl': 'no label', 'jparjl': 'no label', 'arhrjl': 'no label', 'starjl': 'no label', 'kllrjl': 'no label', 'medrjl': 'no label', 'locrjl': 'no label', 'jarrjl': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'shape_leng': 'no label', });
lyr_JembatandiMalang_3.set('fieldLabels', {'qc_id': 'no label', 'namobj': 'no label', 'tipjmb': 'no label', 'fgsjmb': 'no label', 'tonjmb': 'no label', 'tggjmb': 'no label', 'lbrjmb': 'no label', 'matjmb': 'no label', 'strjmb': 'no label', 'dekjmb': 'no label', 'btsjmb': 'no label', 'ayujmb': 'no label', 'jbtjmb': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', });
lyr_JembatandiMalang_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
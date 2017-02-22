// Category Page Enhance - Finish & Voltage
() => {
    let solidBrassConstruction = 'Solid Brass Construction',
        b = 'Black',
        v = 'Verdi',
        w = 'White',
        r = 'Rust',
        bn = 'Brushed Nickel',
        rb = 'Raw Brass',
        br = 'Bronze',
        ab = 'Antique Bronze',
        bc = 'Brushed Copper',
        v12 = '12V',
        v120 = '120V',
        items = [
            [62, solidBrassConstruction, b + ", " + br, v12, '5" <sup>5</sup>&frasl;<sub>16</sub>', '2" <sup>1</sup>&frasl;<sub>4</sub> / 3" <sup>3</sup>&frasl;<sub>4</sub>'],
            [64, solidBrassConstruction, b + ", " + br, v12 + ", " + v120, '7"', '2" <sup>1</sup>&frasl;<sub>4</sub>'],
            [65, solidBrassConstruction, b + ", " + br, v12 + ", " + v120, '10" <sup>1</sup>&frasl;<sub>4</sub> - 13"', '2" <sup>1</sup>&frasl;<sub>2</sub>'],
            [66, solidBrassConstruction, b + ", " + br, v12 + ", " + v120, '10" <sup>1</sup>&frasl;<sub>4</sub> - 13"', '2" <sup>1</sup>&frasl;<sub>2</sub>'],
            [67, solidBrassConstruction, b + ", " + br, v12 + ", " + v120, '10" <sup>1</sup>&frasl;<sub>4</sub> - 13"', '2" <sup>1</sup>&frasl;<sub>2</sub>'],
            [69, solidBrassConstruction, b + ", " + br, v120, '8" <sup>1</sup>&frasl;<sub>4</sub>', '2" <sup>1</sup>&frasl;<sub>2</sub> / 3"'],
            [70, solidBrassConstruction, b + ", " + v + ", " + r + ", " + ab, v12 + ", " + v120, '6" <sup>1</sup>&frasl;<sub>2</sub>', '2" <sup>1</sup>&frasl;<sub>4</sub>'],
            [71, solidBrassConstruction, b + ", " + bc + ", " + bn + ", " + rb + ", " + ab, v12 + ", " + v120, '6" <sup>1</sup>&frasl;<sub>4</sub>', '2" <sup>3</sup>&frasl;<sub>8</sub>'],
            [72, solidBrassConstruction, b + ", " + w + ", " + rb + ", " + v + ", " + r + ", " + ab, v12 + ", " + v120, '4" <sup>1</sup>&frasl;<sub>2</sub>', '2" <sup>1</sup>&frasl;<sub>4</sub>'],
            [73, solidBrassConstruction, b + ", " + r, v12 + ", " + v120, '2" <sup>1</sup>&frasl;<sub>4</sub>', '2" <sup>1</sup>&frasl;<sub>8</sub>'],
            [75, solidBrassConstruction, bn + ", " + rb, v12 + ", " + v120],
            [63, solidBrassConstruction, b + ", " + br, v12],
            [68, solidBrassConstruction, b + ", " + br, v12 + ", " + v120],
            [74, solidBrassConstruction, rb, v12],
            [76, solidBrassConstruction, b + ", " + br + ", " + v, v12]
        ];

    for (let i = 0; i < items.length; i += 1) {
        $('[data-product-id=' + items[i][0] + ']').append(
            '<div class="catalog-product-details">' +
            items[i][1] +
            '<br>' +
            '<strong>Finishes</strong>: ' + items[i][2] +
            '<br>' +
            '<strong>Voltage</strong>: ' + items[i][3] +
            '</div>'
        );
    }
}
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const svgFilter = `
<!-- Liquid Glass Optical Filter -->
<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
  <filter id="liquid-glass-filter" color-interpolation-filters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blurred"></feGaussianBlur>
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise"></feTurbulence>
    <feDisplacementMap in="blurred" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" result="displaced"></feDisplacementMap>
    <feColorMatrix in="displaced" type="saturate" values="1.5" result="saturated"></feColorMatrix>
    <feComponentTransfer in="saturated" result="boosted">
      <feFuncA type="linear" slope="1.2"></feFuncA>
    </feComponentTransfer>
    <feBlend in="SourceGraphic" in2="boosted" mode="screen"></feBlend>
  </filter>
</svg>
`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // If already injected, skip
  if (!html.includes('id="liquid-glass-filter"')) {
    html = html.replace('<body>', '<body>\n' + svgFilter);
    fs.writeFileSync(filePath, html);
    console.log(`Injected SVG filter into ${file}`);
  }
});

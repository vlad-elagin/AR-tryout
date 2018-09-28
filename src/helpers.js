export const getLineParams = (hiro, kanji, color) => {
  return `
    start: ${hiro.object3D.position.x} ${hiro.object3D.position.y} ${hiro.object3D.position.z};
    end: ${kanji.object3D.position.x} ${kanji.object3D.position.y} ${kanji.object3D.position.z};
    color: ${color}
  `;
};

export function criarCubo(cena){

  const cubinhos = [];

  for (let x = -1; x <= 1; x++){
    for (let y = -1; y <= 1; y++){
      for (let z = -1; z <= 1; z++){

        const geometria =
          new THREE.BoxGeometry(0.95, 0.95, 0.95);

        const materiais = criarMateriais(x, y, z);

        const cubinho =
          new THREE.Mesh(geometria, materiais);

        cubinho.position.set(x, y, z);

        cena.add(cubinho);

        cubinhos.push(cubinho);
      }
    }
  }

  return cubinhos;
}

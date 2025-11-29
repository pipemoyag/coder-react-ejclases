import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app); // => una instancia de mi db

// --- COMIENZO DE LA LOGICA DE CARGA ---

const csvData = `category,title,description,price,stock,thumbnail
Alimentos,Leonardo Lata Ternera, Venado y Camote 400gr,Alimento húmedo super‑premium para gatos adultos, con carnes selectas de ternera y venado y un toque de camote para una digestión suave. Enriquecido con aceite de salmón para un pelaje saludable y un poco de catnip para mayor disfrute.,4890,6,https://i.ibb.co/ynY1306v/leonardo-ternera-venado.png
Alimentos,Acana Gato Bountiful Catch 1.8kg,Alimento completo para gato adulto, 1,8kg. Formulado con una combinación de distintos pescados frescos. Contiene un 65% de pescado de calidad a partir de salmón y arenque silvestres enteros y trucha de arcoiris, para que tu gato obtenga todos los minerales, vitaminas y antioxidantes necesarios para fortalecer su sistema inmune. Además, tiene un alto porcentaje de omega 3 y 6 que no solo cuidan su piel y mantiene su pelo brillante, sino que también mejora su salud cardiovascular y articular.,16100,1,https://i.ibb.co/ynsrfV64/acana-bountiful-catch-cat.jpg
Alimentos,Hill's Alimento K/D Kidney Care 1.81kg,El Hill’s k/d es un alimento seco especialmente formulado para apoyar la salud renal de los gatos con enfermedad o insuficiencia renal. Su fórmula clínicamente comprobada ayuda a prolongar la vida y mejorar la calidad de vida, favoreciendo la función renal y manteniendo el apetito. Con un contenido controlado de fósforo y sodio, y niveles óptimos de aminoácidos esenciales y ácidos grasos omega-3, ayuda a proteger los riñones y conservar la masa muscular. Su sabor delicioso facilita la alimentación diaria incluso en gatos con bajo apetito.,25500,2,https://i.ibb.co/MDz0M3Sy/Hills-Kidney-Care-Gato-KD-3-8-Kg.png
Snacks,Cats Snack Atún y Hierba Gatera,Snacks o premios complementarios para gatos, formato de galleta con atún y hierba gatera. Pensada para ofertar variedad y sabor adicional al alimento principal. No son alimentos completos, sino snacks que se dan de manera ocasional.,3000,6,https://i.ibb.co/zTKRKF1W/cats-snacks-atun-con-hierba-gatera.jpg
Snacks,Churu Meal Topper Pollo 4 unidades,Alimento completo y balanceado para gatos adultos en mantención, elaborado con ingredientes de grado humano. Libre de granos, colorantes, preservantes artificiales, sin sal añadida.,2990,3,https://i.ibb.co/21Y1CzgJ/inaba-churu-meal-topper-sabor-pollo.png
Snacks,Churu Box 60 Unidades Variedades Atún,Snack cremoso elaborado con ingredientes de grado humano. Caja contiene 60 unidades. Libre de granos, colorantes, preservantes artificiales y sal añadida. Fortalecido con Vitamina E y té verde.,34990,2,https://i.ibb.co/23FT9dvK/churu-tuna-variety-50-un.webp
Catnip y matatabi,Wonder Cat Erizo Rascador con Bola de Catnip,Juguete autoadhesivo con forma de erizo, con bola de catnip prensada al interior. Las púas del erizo pueden usarse de rascador y el catnip estimula el olfato y la conducta de juego.,2500,10,https://i.ibb.co/NdSjzzbr/catnip-erizo-2.webp
Catnip y matatabi,Bioline Catnip Frasco 20gr,Catnip molido en frasco de 20gr. El catnip estimula el sistema nervioso de tu gato y provoca diversas reacciones placenteras. Coloca sobre superficies, rascadores u objetos para que tu gato interactúe con ellos.,3500,5,https://i.ibb.co/m55hQLrj/catnip-bioline.webp
Catnip y matatabi,Bioline Spray de Matatabi 175ml,Producto diseñado específicamente para gatos que combina extracto de Actinidia polygama (conocida como “matatabi” o hierba gatera japonesa) con un formato en spray de fácil aplicación. Estimula el juego y la curiosidad del gato: al aplicar sobre juguetes, rascadores u objetos, despierta su interés y participación. Alternativa natural a la hierba gatera (catnip): algunos gatos que no reaccionan al catnip sí lo hacen al matatabi. Ayuda a reducir el estrés, mejorar el bienestar y fomentar actividad física y mental en gatos de todas edades.,4590,4,https://i.ibb.co/m5sVMpng/spray-matatabi-bioline.png
Arenas y areneros,Hey! Arenero Abierto con Pala,Arenero abierto con paredes escalonadas. Incluye pala que se puede colocar en la parte posterior.,8500,1,https://i.ibb.co/LDbND4R7/hey-arenero-abierto.png
Arenas y areneros,America Litter Arena Ultra Scooping 7kg,Arena sanitaria de bentonita y carbón activado, que ofrece una gran absorción y rápida aglutinación. El carbón activado ayuda a controlar los olores. Formato de 7kg.,12990,2,https://i.ibb.co/JjRx2mNm/america-litter-ultra-scooping.jpg
Arenas y areneros,Pala Arenero Metálica The Poopscoop,Pala metálica resistente para limpiar el arenero. Su diseño ergonómico facilita la recolección de grumos y residuos.,9990,3,https://i.ibb.co/rfk6R28V/pala-metalica.webp
Juguetes,Pájaro con Sonido y Movimiento Flapping Toy,Juguete interactivo recargable con forma de pájaro que emite sonidos y mueve las alas. Se activa con el toque del gato, material suave tipo felpa y plumas reales. Estimula la curiosidad y el instinto cazador del gato. Incluye un cordel my un broche para colgarlo.,12990,3,https://i.ibb.co/wr0rQ2Yb/flapping-toy.webp
Juguetes,Wonder Cat Pelota Automática,Pelota recargable con movimiento y luz. Solo debes encenderla y observa cómo se mueve por el espacio de forma aleatoria, fomentando los instintos cazadores de tu gato. Incluye cable USB para cargar.,5000,8,https://i.ibb.co/LzYD1Yxw/pelota-automatica-s.webp
Juguetes,Catit Senses 2.0 Wave Circuit,Juguete para gatos que estimula el comportamiento de caza. Incluye pelota con cascabel y circuito armable que puedes personalizar a tu gusto.,16200,1,https://i.ibb.co/0S4wz7D/catit-wave-circuit.jpg
Rascadores,BRNX Rascador Computador Catbook,Rascador para gatos con diseño inspirado en un notebook (ordenador portátil), que combina funcionalidad y estilo. Está pensado para que tu gato pueda rascar, estirarse y divertirse, mientras el producto se integra de forma moderna y decorativa en el hogar. Materiales: Fabricado en cartón ondulado resistente, material ideal para rascar, permitiendo al gato afilar sus garras y liberar energía.,6000,2,https://i.ibb.co/GQ0V4LQH/catbook-2.webp
Rascadores,Rascador Casa Azul,Rascador con diseño tipo casa en tono azul. Proporciona diversión, refugio y una superficie adecuada para rascar. Base superior e inferior de cartón de alta densidad para afilar uñas.,9990,2,https://i.ibb.co/dJVZ8Tyz/refugio-rascador-casa-azul.png
Rascadores,Rascador Redondo Pequeño,Rascador de cartón con forma de cuenco, incluye bolsa con catnip. 40x8 cm,6500,5,https://i.ibb.co/fJPrdpZ/rascador-redondo.jpg
Camas y refugios,Cama Redonda Acolchada,Cama acolchada con forma redonda disponible en tono gris. Proporciona un refugio acogedor para descansar. 48cm diámetro, 15cm altura. Base antideslizante. ,14400,2,https://i.ibb.co/hJN27bP1/Cama-redonda-gris.jpg
Camas y refugios,BRNX Cama Llama Talla L,La Cama BRNX con forma de llama combina diseño divertido y máximo confort para tu mascota. Su interior ultrasuave ofrece una sensación cálida y acogedora, ideal para descansar, acurrucarse y dormir profundamente. Fabricada con materiales de alta calidad y base antideslizante, mantiene su forma y estabilidad mientras añade un toque adorable a tu hogar. Perfecta para gatos que disfrutan de un espacio cómodo y protegido.,16000,1,https://i.ibb.co/pvFf84Z2/cama-brnx-llama.jpg
Camas y refugios,Bolso de Transporte,Bolso de transporte para gato o perro pequeño, color celeste, detalles reflectantes, interior acolchado, triple apertura (delantera, trasera y superior), malla para visualizar y ventilar en los 4 lados y parte superior. Doble asa para transportar y correa extra para llevar al hombro. Bolsillo lateral con velcro. Medidas: 39cm largo, 28cm alto, 26cm ancho.,20000,1,https://i.ibb.co/0R13mwKM/bolso-transporte.webp
Comederos y bebederos,Plato Elevado Candy Style Rosado,Plato elevado desmontable de acero inoxidable en tono rosado o lila pastel, ideal para mejorar la postura al comer. Posee 4 patas que se colocan a presión. 14,5cm diámetro.,5500,3,https://i.ibb.co/5gKMs2yM/candy-style-rosa.webp
Comederos y bebederos,Catit Fuente Bebedera Acero Inoxidable 3L,Fuente premium con tapa de acero inoxidable, ideal para gatos sensibles o dueños que buscan máxima higiene. Mantiene el agua fresca, filtrada y en movimiento, incentivando la hidratación diaria. Características principales:Capacidad: 3 litros.Tapa de acero inoxidable: más higiénica y fácil de limpiar.3 modos de flujo ajustables.Filtro de triple acción: elimina impurezas, pelos y suaviza minerales.Bomba silenciosa y de bajo consumo.Libre de BPA.,42990,2,https://i.ibb.co/7dcQVqGv/catit-flower-fountain-acero-inoxidable-led.jpg
Comederos y bebederos,Catit Play Treat Puzzle,Comedero interactivo o laberinto de snacks. ¡Desafía a tu gato con este completo comedero con 6 actividades altamente estitmulantes! Disminuye el aburrimiento, estimula su cerebro e intelecto, desarrolla habilidades motrices, consumo lento del alimento, mayor tiempo de entretención.,20990,1,https://i.ibb.co/Q3Qnw17t/catit-play-treat-puzzle.jpg
Collares y arneses,Pawise Arnés con Correa para Gatitos,Arnés ajustable con correa liviana, especialmente diseñado para gatitos. Cómodo, seguro y fácil de colocar.,6000,2,https://i.ibb.co/m5kqxhqc/arnes-con-correa-pawise-color.jpg
Collares y arneses,Arnés Gato Vestido Satinado,Arnés ajustable con vestido en tela satinada. Incluye correa para paseo. Color negro, celeste o rojo,6000,2,https://i.ibb.co/5g6sYC5H/arnes-vestido-negro.webp
Collares y arneses,Wonder Cat Collar Lazo Cuadrillé,Collar ajustable antiahorque con aplicación de corbatín, incluye cascabel.,3500,4,https://i.ibb.co/nN3dHV2X/collar-lazo-cuadrille.jpg
Aseo e higiene,Furminator Cepillo Deluxe Gato Large,Cepillo deshedding profesional para gatos de pelo largo. Reduce la caída de pelo muerto y mantiene el manto saludable. Ideal para cepillado en época de pelecha o rutina semanal.,7990,3,https://i.ibb.co/jjb2yX8/furminator-large-cat.webp
Aseo e higiene,PlaqueOff Polvo Gatos 40gr,Suplemento 100 % natural que ayuda a mantener la salud bucal de tu felino, reduciendo la placa, el sarro y el mal aliento de forma segura y sencilla. Su fórmula está elaborada con algas marinas seleccionadas (Ascophyllum nodosum), reconocidas por sus beneficios naturales para la higiene dental. Solo necesitas añadir una pequeña cantidad al alimento diario de tu gato para favorecer una boca más limpia y un aliento fresco, sin cepillado ni estrés. Frasco contiene una pequeña cuchara dosificadora. Dura aprox. 4 meses para un gato.,20990,2,https://i.ibb.co/Vpw3hXZS/plaqueoff-polvo-40g-gato.jpg
Aseo e higiene,Skouts Honor Destructor Orina y Olores,Limpiador enzimático formulado en base a plantas, disuelve las manchas y destruye las moleculas de olor de la orina. Ideal para marcaje indeseado o limpieza de cajas de arena. Seguro para mascotas y humanos, ecofriendlly, vegano y crueltyfree.,18000,2,https://i.ibb.co/TMpPV4fq/skoutshonor-coral.webp
Farmacia,Revolution Plus 0.5ml (2.5 a 5kg),Antiparasitario de amplio espectro para gatos entre 2,5 y 5 kg. Protege contra pulgas, garrapatas y diversos parásitos internos. Envase contiene 1 pipeta de aplicación tópica en la nuca o base del cuello.,14990,3,https://i.ibb.co/7x8TKdYS/revolution-plus-gatos-2.jpg
Farmacia,Cat Calming Feromonas Difusor,Difusor de feromonas que ayuda a reducir el estrés y la ansiedad en gatos. Ideal para cambios de ambiente o comportamientos nerviosos. Contiene difusor con duración de 30 días y enchufe.,7500,2,https://i.ibb.co/LXSZPWX9/catcalming-feromonas-difusor.jpg
Farmacia,Cerenia 24mg 4 Tabletas,Medicamento antiemético veterinario que ayuda a controlar vómitos y mareos en gatos. De uso bajo indicación profesional.,19990,1,https://i.ibb.co/0pDZW6XX/cerenia-24mg.webp`;

/**
 * Convierte la cadena CSV en un array de objetos JavaScript.
 * Realiza la conversión de tipos (price y stock a Number).
 * @param {string} csv - La cadena de datos CSV.
 * @returns {Array<Object>} El array de objetos con tipos de datos correctos.
 */
const csvToObjects = (csv) => {
  const lines = csv.split("\n").filter((line) => line.trim() !== "");
  if (lines.length === 0) return [];

  const [headerLine, ...dataLines] = lines;
  const headers = headerLine.split(",");

  return dataLines.map((line) => {
    const parts = line.split(",");
    const obj = {};

    // 1. Los últimos tres campos son estables
    const thumbnail = parts.pop();
    // Convertidos a Number
    const stock = parseInt(parts.pop());
    const price = parseInt(parts.pop());

    // 2. El primer campo es la categoría
    const category = parts.shift();

    // 3. Los campos restantes son title y description.
    // Asumimos que el primer elemento restante es Title y el resto es Description (uniendo las comas internas)
    const title = parts.shift();
    const description = parts.join(","); // Unimos el resto como Description

    obj[headers[0]] = category;
    obj[headers[1]] = title;
    obj[headers[2]] = description;
    obj[headers[3]] = price; // Number
    obj[headers[4]] = stock; // Number
    obj[headers[5]] = thumbnail;

    return obj;
  });
};

/**
 * Itera sobre el array de objetos y los carga a la colección "items" de Firestore
 * con IDs generados automáticamente.
 */
export const uploadDataToFirestore = async () => {
  if (!db) {
    console.error(
      "Error: La instancia de Firestore (db) no fue proporcionada o está indefinida."
    );
    return;
  }

  const itemsToUpload = csvToObjects(csvData);
  const collectionRef = collection(db, "items");
  let successfulUploads = 0;

  console.log(
    `Comenzando la carga de ${itemsToUpload.length} documentos a Firestore...`
  );

  for (const item of itemsToUpload) {
    try {
      // addDoc crea un documento con un ID automático
      const docRef = await addDoc(collectionRef, item);
      successfulUploads++;
      console.log(`✅ Documento cargado: ${item.title} (ID: ${docRef.id})`);
    } catch (error) {
      console.error(`❌ Error al cargar el documento: ${item.title}`, error);
    }
  }

  console.log("------------------------------------------");
  console.log(
    `Proceso completado. ${successfulUploads} documentos cargados con éxito.`
  );
  console.log("------------------------------------------");
};

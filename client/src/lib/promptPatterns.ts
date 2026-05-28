export interface PromptStyle {
  id: string;
  category: "Luxo" | "Décadas" | "Editorial" | "Futurista";
  name: string;
  description: string;
  filmmaker: string;
  filmStock: string;
  environment: string;
  subjectAttitude: string;
  surrealism: string;
  colorPalette: string;
  finalFeeling: string;
  variables: PromptVariable[];
}

export interface PromptVariable {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "select" | "color";
  options?: string[];
}

export const promptStyles: PromptStyle[] = [
  {
    id: "90s-minimalism",
    category: "Décadas",
    name: "90s Minimalism (Helmut Lang)",
    description: "Estética limpa, urbana e austera dos anos 90. Foco em silhuetas e texturas cruas.",
    filmmaker: "Juergen Teller",
    filmStock: "35mm Point and Shoot, flash on, raw grain",
    environment: "A stark, minimalist [LOCATION]. Industrial grey tones, concrete textures, harsh but intentional lighting.",
    subjectAttitude: "Detached, cool, and effortless. The subject is [SUBJECT_ACTION] wearing [CLOTHING_MATERIAL].",
    surrealism: "The beauty is in the mundane. [RANDOM_DETAIL]. No artificial drama.",
    colorPalette: "Monochromatic, cool greys, stark whites, and deep blacks.",
    finalFeeling: "A raw, unpolished fashion editorial from 1996.",
    variables: [
      { name: "location", label: "Localização", placeholder: "Ex: loft vazio, escadaria de concreto", type: "text" },
      { name: "clothing_material", label: "Material da Roupa", placeholder: "Ex: couro preto, seda branca", type: "text" },
      { name: "subject_action", label: "Ação", placeholder: "Ex: olhando fixamente, encostada na parede", type: "text" }
    ]
  },
  {
    id: "balenciaga-avant-garde",
    category: "Luxo",
    name: "Balenciaga (Avant-Garde)",
    description: "Surrealismo urbano, proporções exageradas e atmosfera distópica de alta moda.",
    filmmaker: "Demna-inspired Cinematic",
    filmStock: "CCTV footage quality mixed with 8k digital precision",
    environment: "An unsettlingly quiet [LOCATION]. Shadows are deep and heavy. Volumetric fog.",
    subjectAttitude: "Anonymity and power. The subject wears [CLOTHING_MATERIAL] with [SURREAL_SCALE].",
    surrealism: "Distorted reality: [ABSURD_ELEMENT]. Impossible silhouettes.",
    colorPalette: "Electric blue, deep black, and warning-sign yellow.",
    finalFeeling: "A high-fashion fever dream from the near future.",
    variables: [
      { name: "location", label: "Localização", placeholder: "Ex: posto de gasolina à noite, supermercado vazio", type: "text" },
      { name: "clothing_material", label: "Material", placeholder: "Ex: látex brilhante, tecido técnico pesado", type: "text" },
      { name: "absurd_element", label: "Elemento Absurdo", placeholder: "Ex: sapatos flutuantes, modelos idênticos", type: "text" }
    ]
  },
  {
    id: "chanel-classic",
    category: "Luxo",
    name: "Chanel (Classic Heritage)",
    description: "Elegância atemporal, tweed e atmosfera parisiense sofisticada.",
    filmmaker: "Karl Lagerfeld-style Photography",
    filmStock: "Black and white medium format, high contrast",
    environment: "A grand [LOCATION] in Paris. Elegant architectural details, soft morning light.",
    subjectAttitude: "Graceful and poised. Wearing [CLOTHING_MATERIAL] with classic accessories.",
    surrealism: "Subtle luxury: [RANDOM_DETAIL]. The essence of French chic.",
    colorPalette: "Timeless Black and White, with hints of pearl and gold.",
    finalFeeling: "The pinnacle of French luxury and timeless style.",
    variables: [
      { name: "location", label: "Localização", placeholder: "Ex: Rue Cambon, terraço parisiense", type: "text" },
      { name: "clothing_material", label: "Material", placeholder: "Ex: tweed clássico, pérolas", type: "text" }
    ]
  },
  {
    id: "jacquemus-dream",
    category: "Editorial",
    name: "Jacquemus (Mediterranean Dream)",
    description: "Cores pastéis, campos abertos e escala surrealista lúdica.",
    filmmaker: "Editorial Campaign",
    filmStock: "Fuji Pro 400H, pastel tones",
    environment: "A vast [LOCATION] under a soft [LIGHTING] sky.",
    subjectAttitude: "Serene and playful. Interacting with [SURREAL_SCALE].",
    surrealism: "Scale distortion: [ABSURD_ELEMENT]. Dream logic.",
    colorPalette: "Sun-faded [COLOR_1] and [COLOR_2].",
    finalFeeling: "A Mediterranean fashion dreamscape.",
    variables: [
      { name: "location", label: "Localização", placeholder: "Ex: campo de lavanda, salina branca", type: "text" },
      { name: "color_1", label: "Cor 1", placeholder: "Ex: rosa pastel", type: "text" },
      { name: "color_2", label: "Cor 2", placeholder: "Ex: azul céu", type: "text" },
      { name: "absurd_element", label: "Elemento Surreal", placeholder: "Ex: bolsa gigante, limão de 2 metros", type: "text" }
    ]
  }
];

export const cameraOptions = [
  "Leica M11, 35mm f/1.4 Summilux",
  "Hasselblad H6D-100c, 80mm lens",
  "Canon EOS R5, 50mm f/1.2 L",
  "Vintage 35mm Point and Shoot",
  "Arri Alexa Mini, Anamorphic lenses"
];

export const lightingOptions = [
  "Golden Hour (warm, directional)",
  "Soft Studio Diffusion (clean, high-end)",
  "Hard Midday Sun (high contrast, sharp shadows)",
  "Neon Night (cyan and magenta highlights)",
  "Overcast Day (flat, soft, natural)"
];

export interface GeneratedPrompts {
  midjourney: string;
  stableDiffusion: string;
  dalle: string;
}

export function generateMasterPrompt(
  styleId: string, 
  variables: Record<string, string>,
  camera: string = cameraOptions[0],
  lighting: string = lightingOptions[0],
  aspectRatio: string = "4:5",
  stylize: string = "250"
): GeneratedPrompts {
  const style = promptStyles.find(s => s.id === styleId);
  if (!style) return { midjourney: "", stableDiffusion: "", dalle: "" };

  let env = style.environment;
  let att = style.subjectAttitude;
  let sur = style.surrealism;
  let col = style.colorPalette;

  // Replace variables
  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = `[${key.toUpperCase()}]`;
    env = env.replace(placeholder, value || placeholder);
    att = att.replace(placeholder, value || placeholder);
    sur = sur.replace(placeholder, value || placeholder);
    col = col.replace(placeholder, value || placeholder);
  });

  const baseContent = `${env} ${att} ${sur} ${col} Film Stock: ${style.filmStock}. ${style.finalFeeling}`;

  // 1. Midjourney Format
  const midjourney = `A professional fashion campaign shot with ${camera}. Lighting: ${lighting}. High-end editorial quality. ${baseContent} --ar ${aspectRatio} --stylize ${stylize} --v 6.0`;

  // 2. Stable Diffusion Format (Keyword heavy with weights)
  const sdKeywords = baseContent.replace(/\./g, ",").replace(/\n/g, ", ");
  const stableDiffusion = `(high-end fashion editorial:1.2), (professional photography:1.1), shot on ${camera}, ${lighting} lighting, ${sdKeywords}, masterpiece, 8k, highly detailed, sharp focus, cinematic grain`;

  // 3. DALL-E 3 Format (Narrative and descriptive)
  const dalle = `A high-end professional fashion editorial photograph. The scene features ${env} The subject is ${att} The image has a surreal quality: ${sur} The color palette is ${col} Shot with a ${camera} under ${lighting} lighting, with the texture of ${style.filmStock}. The overall mood is ${style.finalFeeling}. Aspect ratio: ${aspectRatio}.`;

  return { midjourney, stableDiffusion, dalle };
}

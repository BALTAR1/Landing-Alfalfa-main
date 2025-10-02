# 📸 Guía para Agregar Imágenes y Videos - Alfalfita

## 📁 Estructura de Carpetas Creada

```
public/
├── images/
│   ├── hero/
│   │   └── campo-alfalfa-hero.jpg        # Imagen principal del hero
│   ├── about/
│   │   └── familia-alfalfita.jpg         # Foto de la familia/equipo
│   ├── products/
│   │   ├── alfalfa-pellets.jpg           # Foto de alfalfa pelletizada
│   │   ├── fardos-alfalfa.jpg            # Foto de fardos de alfalfa
│   │   └── alfalfa-picada.jpg            # Foto de alfalfa picada
│   ├── gallery/
│   │   ├── campo-alfalfa-1.jpg           # Campo de alfalfa 1
│   │   ├── campo-alfalfa-2.jpg           # Campo de alfalfa 2
│   │   ├── cosecha-alfalfa-1.jpg         # Proceso de cosecha
│   │   ├── fardos-alfalfa-1.jpg          # Fardos apilados
│   │   ├── pellets-alfalfa-1.jpg         # Alfalfa pelletizada
│   │   └── transporte-1.jpg              # Logística y transporte
│   └── videos/
│       ├── poster-cultivo.jpg            # Miniatura video cultivo
│       ├── poster-calidad.jpg            # Miniatura video calidad
│       └── poster-testimonios.jpg        # Miniatura testimonios
└── videos/
    ├── proceso-cultivo-alfalfa.mp4       # Video del proceso completo
    ├── calidad-productos.mp4             # Video control de calidad
    └── testimonios-clientes.mp4          # Video testimonios

```

## 🖼️ Especificaciones de Imágenes

### Imagen Principal (Hero)
- **Archivo**: `campo-alfalfa-hero.jpg`
- **Tamaño recomendado**: 1200x800 px
- **Descripción**: Panorámica de campos de alfalfa verdes en San Juan

### Imágenes de Productos
- **Tamaño**: 600x400 px cada una
- **Formato**: JPG optimizado
- **Peso máximo**: 200KB por imagen

### Galería
- **Tamaño**: 800x600 px
- **Categorías disponibles**:
  - `campos`: Fotos de los campos de cultivo
  - `proceso`: Siembra, crecimiento, cosecha
  - `productos`: Productos terminados
  - `logistica`: Transporte y entrega

## 🎥 Especificaciones de Videos

### Formatos Soportados
- **Formato**: MP4 (H.264)
- **Resolución**: 1920x1080 (Full HD) o 1280x720 (HD)
- **Duración recomendada**: 1-3 minutos por video
- **Peso máximo**: 50MB por video

### Videos Sugeridos
1. **Proceso de Cultivo**: Desde siembra hasta cosecha
2. **Control de Calidad**: Procesos de selección y empaque
3. **Testimonios**: Clientes satisfechos hablando de la calidad

## 📋 Cómo Agregar Tus Archivos

### Paso 1: Copiar Archivos
1. Copia tus imágenes a las carpetas correspondientes en `public/images/`
2. Copia tus videos a `public/videos/`
3. Mantén los nombres de archivo sugeridos para compatibilidad automática

### Paso 2: Si tienes nombres diferentes
Si tus archivos tienen nombres diferentes, puedes:
1. Renombrarlos según esta guía, O
2. Avisarme los nombres reales para actualizar el código

### Paso 3: Optimización Automática
El sitio incluye:
- ✅ Lazy loading automático
- ✅ Fallbacks si faltan imágenes
- ✅ Compresión automática
- ✅ Responsive design

## 🔧 Funcionalidades Implementadas

### Imágenes
- **Lazy Loading**: Las imágenes cargan solo cuando son visibles
- **Fallbacks**: Si una imagen no existe, muestra un placeholder
- **Optimización**: Carga progresiva y responsive
- **Galería Modal**: Click en imágenes para vista ampliada

### Videos
- **Player Personalizado**: Controles nativos con diseño custom
- **Posters**: Miniaturas mientras el video no reproduce
- **Responsive**: Se adapta a todos los dispositivos
- **Fallbacks**: Placeholder si el video no está disponible

## 📱 Resultado Final

Con todas las imágenes y videos, tu sitio tendrá:
- Página principal impactante con imágenes reales
- Galería filtrable por categorías
- Sección de videos profesional
- Productos con fotos reales
- Experiencia completamente visual

## 🚀 ¿Necesitas Ayuda?

Si tienes:
- Imágenes con nombres diferentes
- Videos en otros formatos
- Dudas sobre optimización
- Problemas con la subida

¡Solo avísame y te ayudo a integrar todo perfectamente!

---

**Nota**: Todos los componentes ya están configurados para manejar archivos que no existan, mostrando placeholders automáticamente hasta que agregues las imágenes reales.
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
function redirectToMovie(movieId) {
    router.push(`/movie/${movieId}`);
}
function redirectToSerie(movieId) {
    router.push(`/serie/${movieId}`);
}
// Declaramos los arrays con los tipos correctos
const movies = ref([]);
const trendingMovies = ref([]);
const freeMovies = ref([]);
const allSeries = ref([]);
const currentIndex = ref(0);
const searchQuery = ref('');
// Función para obtener las películas populares
const fetchPeliculasPopulares = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e72051e3bc2c615ed21d74e9a55ac50&language=en-US&page=1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        movies.value = data.results;
    }
    catch (error) {
        console.error('Error fetching popular movies:', error);
    }
};
// Función para obtener las películas en tendencia
const fetchPelicuasTendencia = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4e72051e3bc2c615ed21d74e9a55ac50');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        trendingMovies.value = data.results;
    }
    catch (error) {
        console.error('Error fetching trending movies:', error);
    }
};
// Función para obtener todas las series
const fetchSeries = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=4e72051e3bc2c615ed21d74e9a55ac50&language=en-US&page=1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        allSeries.value = data.results;
    }
    catch (error) {
        console.error('Error fetching series:', error);
    }
};
// Función para obtener las películas gratuitas (No las encontre)
const fetchPeliculasGratis = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e72051e3bc2c615ed21d74e9a55ac50&with_watch_providers=free');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        freeMovies.value = data.results;
    }
    catch (error) {
        console.error('Error fetching free movies:', error);
    }
};
// Llamamos a las funciones fetch cuando el componente se monta
onMounted(() => {
    fetchPeliculasPopulares();
    fetchPelicuasTendencia();
    fetchSeries();
    fetchPeliculasGratis();
});
// Función para avanzar a la siguiente imagen
const nextImage = () => {
    if (movies.value.length === 0)
        return;
    currentIndex.value = (currentIndex.value + 1) % movies.value.length;
};
// Función para retroceder a la imagen anterior
const prevImage = () => {
    if (movies.value.length === 0)
        return;
    currentIndex.value = (currentIndex.value - 1 + movies.value.length) % movies.value.length;
};
// Función para manejar la búsqueda
const handleSearch = () => {
    console.log('Search:', searchQuery.value);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['flex'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-full h-96 overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 flex transition-transform duration-500 ease-in-out") }, ...{ style: (({ transform: `translateX(-${__VLS_ctx.currentIndex * (100 / 3)}%)` })) }, });
    for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.movies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((movie.id)), ...{ class: ("w-1/3 h-full flex-shrink-0") }, });
        if (movie.backdrop_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://image.tmdb.org/t/p/original${movie.backdrop_path}`)), alt: ((movie.title)), ...{ class: ("object-cover w-full h-full") }, });
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full max-w-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (__VLS_ctx.handleSearch) }, value: ((__VLS_ctx.searchQuery)), type: ("text"), placeholder: ("Buscar película..."), ...{ class: ("w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-sky-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.prevImage) }, ...{ class: ("absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextImage) }, ...{ class: ("absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("my-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4") }, });
    for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.trendingMovies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.redirectToMovie(movie.id);
                } }, key: ((movie.id)), ...{ class: ("flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer") }, });
        if (movie.poster_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://image.tmdb.org/t/p/w500${movie.poster_path}`)), alt: ((movie.title)), ...{ class: ("w-full rounded-md") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("bg-green-500 text-white px-2 py-1 rounded-md text-sm") }, });
        (Math.round(movie.vote_average * 10) / 10);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mt-1") }, });
        (movie.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        (new Date(movie.release_date).toLocaleDateString());
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("my-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4") }, });
    for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.movies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.redirectToMovie(movie.id);
                } }, key: ((movie.id)), ...{ class: ("flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer") }, });
        if (movie.poster_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://image.tmdb.org/t/p/w500${movie.poster_path}`)), alt: ((movie.title)), ...{ class: ("w-full rounded-md") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("bg-green-500 text-white px-2 py-1 rounded-md text-sm") }, });
        (Math.round(movie.vote_average * 10) / 10);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mt-1") }, });
        (movie.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        (new Date(movie.release_date).toLocaleDateString());
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("my-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4") }, });
    for (const [serie] of __VLS_getVForSourceType((__VLS_ctx.allSeries))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.redirectToSerie(serie.id);
                } }, key: ((serie.id)), ...{ class: ("flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer") }, });
        if (serie.poster_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://image.tmdb.org/t/p/w500${serie.poster_path}`)), alt: ((serie.name)), ...{ class: ("w-full rounded-md") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("bg-blue-500 text-white px-2 py-1 rounded-md text-sm") }, });
        (Math.round(serie.vote_average * 10) / 10);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mt-1") }, });
        (serie.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        (new Date(serie.first_air_date).toLocaleDateString());
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("my-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4") }, });
    for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.freeMovies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.redirectToMovie(movie.id);
                } }, key: ((movie.id)), ...{ class: ("flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer") }, });
        if (movie.poster_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://image.tmdb.org/t/p/w500${movie.poster_path}`)), alt: ((movie.title)), ...{ class: ("w-full rounded-md") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("bg-green-500 text-white px-2 py-1 rounded-md text-sm") }, });
        (Math.round(movie.vote_average * 10) / 10);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold mt-1") }, });
        (movie.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        (new Date(movie.release_date).toLocaleDateString());
    }
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-96'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-500'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['w-1/3'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['bg-opacity-70'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-lg'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-sky-500'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['bg-opacity-50'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['bg-opacity-50'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['my-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-none'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-green-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['my-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-none'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-green-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['my-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-none'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['my-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-none'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-green-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            redirectToMovie: redirectToMovie,
            redirectToSerie: redirectToSerie,
            movies: movies,
            trendingMovies: trendingMovies,
            freeMovies: freeMovies,
            allSeries: allSeries,
            currentIndex: currentIndex,
            searchQuery: searchQuery,
            nextImage: nextImage,
            prevImage: prevImage,
            handleSearch: handleSearch,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

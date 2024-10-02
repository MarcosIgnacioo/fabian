import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import headers from '../globals';
import { ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
//redireccionar
const router = useRouter();
function redirectToKeyword(keywordId) {
    router.push(`/movies/keyword/${keywordId}`);
}
function redirectToGenre(genreId) {
    router.push(`/movies/category/${genreId}`);
}
function redirectToMovie(movieId) {
    router.push(`/movie/${movieId}`);
}
function redirectToPerson(personId) {
    router.push(`/person/${personId}`);
}
const route = useRoute();
const movieId = route.params.id;
const imgBasePath = "https://image.tmdb.org/t/p/w500";
let movie = ref(null);
const credits = ref(null);
const keywords = ref(null);
const recommendations = ref(null);
const trailer = ref(null);
watch(() => route.params.id, (newId) => {
    if (typeof newId === 'string') {
        getMovieDetails(newId);
        window.scrollTo(0, 0);
    }
});
const isFavorite = ref(false);
function toggleFavorite() {
    if (!movie.value)
        return;
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const movieIndex = favoritos.findIndex((fav) => fav.id === movie.value.id);
    if (movieIndex === -1) {
        favoritos.push(movie.value);
        isFavorite.value = true;
    }
    else {
        favoritos.splice(movieIndex, 1);
        isFavorite.value = false;
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}
async function getMovieDetails(movieId) {
    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow"
    };
    //trailer
    const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, requestOptions);
    const videosJson = await videosResponse.json();
    trailer.value = videosJson.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
    //las cosas de la pelicula
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, requestOptions);
    const json = await response.json();
    movie.value = json;
    //creditos
    const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, requestOptions);
    const creditsJson = await creditsResponse.json();
    credits.value = creditsJson;
    //keyword goofy as markos
    const keywordsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords`, requestOptions);
    const keywordsJson = await keywordsResponse.json();
    keywords.value = keywordsJson;
    //la reco
    const recommendationsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`, requestOptions);
    const recommendationsJson = await recommendationsResponse.json();
    recommendations.value = recommendationsJson;
}
//director
function getDirector() {
    if (!credits.value)
        return 'Desconocido';
    const director = credits.value.crew.find(person => person.job === 'Director');
    return director ? director.name : 'Desconocido';
}
//guionista
function getScreenplay() {
    if (!credits.value)
        return 'Desconocido';
    const writers = credits.value.crew.filter(person => person.job === 'Screenplay');
    return writers.length ? writers.map(writer => writer.name).join(', ') : 'Desconocido';
}
//actores maaaaaas prinsipales
function getActors() {
    if (!credits.value)
        return [];
    return credits.value.cast.slice(0, 9).map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: actor.profile_path
    }));
}
function getReleaseYear(releaseDate) {
    return releaseDate.substring(0, 4);
}
getMovieDetails(movieId);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.movie) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-full bg-fixed bg-center bg-cover bg-no-repeat p-6 text-white") }, ...{ style: ((`background-image: url(${__VLS_ctx.imgBasePath + __VLS_ctx.movie.backdrop_path});`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-black bg-opacity-90") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative flex space-x-6 max-w-7xl mx-auto") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + __VLS_ctx.movie.poster_path)), alt: ((__VLS_ctx.movie.title)), ...{ class: ("w-96 h-auto shadow-lg rounded-lg") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-5xl font-bold") }, });
        (__VLS_ctx.movie.title);
        (__VLS_ctx.getReleaseYear(__VLS_ctx.movie.release_date));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2") }, });
        (__VLS_ctx.movie.release_date);
        (__VLS_ctx.movie.original_language);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.movie.runtime);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.movie.vote_average);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleFavorite) }, ...{ class: ((__VLS_ctx.isFavorite ? 'bg-red-500' : 'bg-blue-500')) }, ...{ class: ("text-white px-4 py-2 mt-4 rounded-lg") }, });
        (__VLS_ctx.isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos');
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-8") }, });
        (__VLS_ctx.movie.overview);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [genre] of __VLS_getVForSourceType((__VLS_ctx.movie.genres))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((genre.id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.movie)))
                            return;
                        __VLS_ctx.redirectToGenre(genre.id);
                    } }, ...{ class: ("cursor-pointer hover:underline") }, });
            (genre.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.getDirector());
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.getScreenplay());
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4 py-4") }, });
        for (const [actor] of __VLS_getVForSourceType((__VLS_ctx.getActors()))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.movie)))
                            return;
                        __VLS_ctx.redirectToPerson(actor.id);
                    } }, key: ((actor.name)), ...{ class: ("ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + actor.profile_path)), alt: ((actor.name)), ...{ class: ("w-full h-auto rounded-lg mb-1") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
            (actor.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
            (actor.character);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        (__VLS_ctx.movie.original_title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4") }, });
        (__VLS_ctx.movie.status);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4") }, });
        (__VLS_ctx.movie.original_language);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4") }, });
        (__VLS_ctx.movie.budget.toLocaleString());
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4") }, });
        (__VLS_ctx.movie.revenue.toLocaleString());
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 ml-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex flex-wrap space-x-2 mt-2") }, });
        for (const [keyword] of __VLS_getVForSourceType((__VLS_ctx.keywords?.keywords))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((keyword.id)), ...{ class: ("mb-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.movie)))
                            return;
                        __VLS_ctx.redirectToKeyword(keyword.id);
                    } }, ...{ class: ("bg-blue-500 text-white rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-blue-700 transition") }, });
            (keyword.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        if (__VLS_ctx.trailer) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 mb-4 ml-4") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ src: ((`https://www.youtube.com/embed/${__VLS_ctx.trailer.key}`)), width: ("560"), height: ("315"), frameborder: ("0"), allow: ("accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"), allowfullscreen: (true), });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        if (__VLS_ctx.recommendations && __VLS_ctx.recommendations.results && __VLS_ctx.recommendations.results.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4 py-4") }, });
            for (const [recommendation] of __VLS_getVForSourceType((__VLS_ctx.recommendations.results))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.movie)))
                                return;
                            if (!((__VLS_ctx.recommendations && __VLS_ctx.recommendations.results && __VLS_ctx.recommendations.results.length > 0)))
                                return;
                            __VLS_ctx.redirectToMovie(recommendation.id);
                        } }, key: ((recommendation.id)), ...{ class: ("ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + recommendation.poster_path)), alt: ((recommendation.title)), ...{ class: ("w-full h-auto rounded-lg mb-1") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
                (recommendation.title);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
                ((recommendation.vote_average * 10).toFixed(0));
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        }
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-fixed'];
    __VLS_styleScopedClasses['bg-center'];
    __VLS_styleScopedClasses['bg-cover'];
    __VLS_styleScopedClasses['bg-no-repeat'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['bg-opacity-90'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-6'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['w-96'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
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
            redirectToKeyword: redirectToKeyword,
            redirectToGenre: redirectToGenre,
            redirectToMovie: redirectToMovie,
            redirectToPerson: redirectToPerson,
            imgBasePath: imgBasePath,
            movie: movie,
            keywords: keywords,
            recommendations: recommendations,
            trailer: trailer,
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite,
            getDirector: getDirector,
            getScreenplay: getScreenplay,
            getActors: getActors,
            getReleaseYear: getReleaseYear,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

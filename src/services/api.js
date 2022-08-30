const apiURL = `https://api.lyrics.ovh/v1/`;

const getSound = async({artista, cancion}) => {
    try {
        const response = await fetch(`${apiURL}${artista}/${cancion}`)
        return await response.json();
    } catch (error) {
        return error;
    }
}

export {getSound}
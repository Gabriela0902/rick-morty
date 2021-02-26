export default class API 
{
    async getCharacter(url)
    {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    async getCharacterGeneral(page)
    {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const data = await response.json()
        return data
    }

    async getLocation()
    {
        const response = await fetch(`https://rickandmortyapi.com/api/location/?page=1`)
        const data = await response.json()
        return data
    }

    async getEpisode(page)
    {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        const data = await response.json()
        return data
    }

}
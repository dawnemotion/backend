import axios from "axios";
import cheerio from "cheerio";

export const site = async (naver) => {
    const site = await axios.get(naver)
    const $ = cheerio.load(site.data)
    const mysite= {};
    $("meta").each((_, el) => {
        if($(el).attr('property')){
            const key = $(el).attr('property').split(":")[1]
            const value = $(el).attr('content')
            mysite[key] = value
        }
    })
   return mysite
}

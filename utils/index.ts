export function ratingScore (rating){
    if(!rating.average) return
   return  rating.average ? Math.floor(rating.average / 2) : 0;
}

export function convertMinsToHrsMins(mins: number) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let hrs = h > 0 ? h + "h" : "";
    let min = m > 0 ? m + "m" : "";
    return hrs + min;
}

export function sanitizeHtml(htmlString:string) {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  }
export const stars = Array.from({ length: 5 }, (_, i) => i + 1);


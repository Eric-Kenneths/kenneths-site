import { appGlobal } from '@/store/global/appGlobal';

export function handleResponse(response) {    

    var noResponseError = true;

    //console.log(response);
    const data = JSON.stringify(response);

    JSON.parse(data, (key, value) => {
        if (key === "status" && value === "error") {
            // var description = JSON.parse(data).description;
            //var title = JSON.parse(data).title;

            //noResponseError = false;
            console.log(error);

            //Put a fancier alert here
        }

        if (key === "__RequestVerificationToken") {
            appGlobal.requestVerificationToken = value;
        }
    });

    if (response.toString() === "401")
    {
        window.location.replace("https://it.kenneths.com/");
    }
    
    return noResponseError;    
}

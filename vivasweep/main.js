let slots = [];
let people = [];
slots.push(3.55); people.push('Harry Cooke');
function getPerson(time)
{
    h = time.getHours()
    m = time.getMinutes()

    for (let i =0; i < slots.length; i++)
    {
        let slot_h = Math.floor(slots[i]);
        let slot_m = Math.round((slots[i] - slot_h) * 100);
        //console.log(slot_h, slot_m);
        if (h != slot_h) continue;
        if (m < slot_m || m > slot_m + 5) continue;
        return people[i]; 
    }
    return ""
}

function startTime()
{
    //Set time:
    let start = new Date('11 Dec 2019 13:30:00 GMT');
    let stop = new Date('11 Dec 2019 23:00:00 GMT');
    let now = new Date();
    let duration = new Date(now.getTime() - start.getTime() - 3600*1000);
    let negative = duration.getTime() + 3600*1000 < 0
    let finished = now.getTime() - stop.getTime() > 0
    if (finished) duration = stop;
    else if (negative) duration = new Date(start.getTime() - now.getTime() - 3600*1000);
    let h=duration.getHours()
    let m=duration.getMinutes()
    let s=duration.getSeconds()
    document.getElementById('time').innerHTML=/*(negative?"-":"")+*/cT(h)+"h "+cT(m)+"m "+cT(s)+"s";

    //set general notice:
    let general = document.getElementById('general')
    if (finished) general.innerHTML = "The viva has finished!<br>The final time was"
    else if (negative) general.innerHTML = "The viva will begin in..."
    else general.innerHTML = "The viva has been going for"

    //get person
    let done=false;
    let currentbin=getPerson(duration);
    let nexttime = new Date(duration.getTime() + 5*60*1000)
    let nextbin = getPerson(nexttime);
    let persondiv = document.getElementById('person') 
    if (finished)
    {
        if (currentbin!="") persondiv.innerHTML = "The winner was "+currentbin+"!";
        else persondiv.innerHTML = "Unfortunately nobody claimed this bin! There's no winner this time..."
    }
    else if (negative) persondiv.innerHTML = "Get your guesses in now! Visit the ATLAS student office or email russelljamesturner@gmail.com to claim your bin."
    else
    {
        persondiv.innerHTML = "Current bin: " +
                              ((currentbin=="") ? "None" : currentbin) +
                              "<br>" +
                              "Next bin: " +
                              ((nextbin=="") ? "None" : nextbin)
    }

    t=setTimeout('startTime()',500);
}

//function for formatting numbers
function cT(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}

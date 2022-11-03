let slots = [];
let people = [];
slots.push(2.40); people.push("DGC");
slots.push(2.45); people.push("blank");
slots.push(2.50); people.push("blank");
slots.push(2.55); people.push("blank");
slots.push(3.00); people.push("blank");
slots.push(3.05); people.push("blank");
slots.push(3.10); people.push("blank");
slots.push(3.15); people.push("AA");
slots.push(3.20); people.push("blank");
slots.push(3.25); people.push("JS");
slots.push(3.30); people.push("TWB");
slots.push(3.35); people.push("WG");
slots.push(3.40); people.push("JDL");
slots.push(3.45); people.push("PRN");
slots.push(3.50); people.push("AW");
slots.push(3.55); people.push("MM");
slots.push(4.00); people.push("HC");
slots.push(4.05); people.push("DJB");
slots.push(4.10); people.push("RJW");
slots.push(4.15); people.push("NS");
slots.push(4.20); people.push("AMMJdC");
slots.push(4.25); people.push("JH");
slots.push(4.30); people.push("RB");
slots.push(4.35); people.push("JFM");
slots.push(4.40); people.push("blank");
slots.push(4.45); people.push("MJM");
slots.push(4.50); people.push("blank");
slots.push(4.55); people.push("JHL");
slots.push(5.00); people.push("PNS");
slots.push(5.05); people.push("blank");
slots.push(5.10); people.push("blank");
slots.push(5.15); people.push("blank");
slots.push(5.20); people.push("blank");
slots.push(5.25); people.push("blank");
slots.push(5.30); people.push("NKW");
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
        if (m < slot_m || m >= slot_m + 5) continue;
        return people[i]; 
    }
    return ""
}

function startTime()
{
    //Set time:
    let start = new Date('03 Nov 2022 14:00:00 GMT');
    let stop =  new Date('');//'03 Oct 2022 21:00:00 GMT');
    let now = new Date();
    let duration = new Date(now.getTime() - start.getTime() - 3600*1000);
    let negative = duration.getTime() + 3600*1000 < 0
    let finished = now.getTime() - stop.getTime() > 0
    if (finished) duration = new Date(stop.getTime() - start.getTime() - 3600*1000);
    else if (negative) duration = new Date(start.getTime() - now.getTime() - 3600*1000);
    let h=duration.getHours()
    let m=duration.getMinutes()
    let s=duration.getSeconds()
    document.getElementById('time').innerHTML=/*(negative?"-":"")+*/cT(h)+"h "+cT(m)+"m "+cT(s)+"s";

    //set general notice:
    let general = document.getElementById('general')
    if (finished) general.innerHTML = "The viva has finished!<br>The final time was"
    else if (negative) general.innerHTML = "Good luck Tom!<br>The viva will begin in..."
    else general.innerHTML = "The viva has been going for"

    //get person
    let done=false;
    let thistime = new Date(duration.getTime()); //weird unnecessary variable, trying to solve a synchro error
    let currentbin=getPerson(thistime);
    let nexttime = new Date(thistime.getTime() + 5*60*1000)
    let nextbin = getPerson(nexttime);
    let persondiv = document.getElementById('person') 
    if (finished)
    {
        if (currentbin!="") persondiv.innerHTML = "The winner was "+currentbin+"!";
        else persondiv.innerHTML = "Unfortunately nobody claimed this bin! There's no winner this time..."
    }
    else if (negative) persondiv.innerHTML = "Get your guesses in now! Visit the ATLAS student office or email robert.james.ward@cern.ch to claim your bin."
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

let slots = [];
let people = [];
slots.push(2.40); people.push('(illegible)');
slots.push(2.50); people.push('(illegible)');
slots.push(2.55); people.push('DL');
slots.push(3.00); people.push('AW');
slots.push(3.05); people.push('AF');
slots.push(3.10); people.push('RW');
slots.push(3.15); people.push('RV');
slots.push(3.20); people.push('RT');
slots.push(3.25); people.push('ADC');
slots.push(3.30); people.push('GB');
slots.push(3.35); people.push('RB');
slots.push(3.40); people.push('PK');
slots.push(3.45); people.push('JK');
slots.push(3.50); people.push('ER');
slots.push(3.55); people.push('HC');
slots.push(4.00); people.push('JP');
slots.push(4.05); people.push('RC');
slots.push(4.10); people.push('JS');
slots.push(4.15); people.push('GV');
slots.push(4.20); people.push('REO');
slots.push(4.25); people.push('PS');
slots.push(4.30); people.push('TB');
slots.push(4.35); people.push('JL');
slots.push(4.40); people.push('PN');
slots.push(4.45); people.push('DB');
slots.push(4.50); people.push('(illegible)');
slots.push(6.15); people.push('JB');
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
    let start = new Date('11 Dec 2019 13:30:19 GMT');
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

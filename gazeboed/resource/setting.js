//requires:

class Setting
{
    constructor(tag, text, docs = "", enabled = false)
    {
        this.tag = tag;
        this.text = text;
        this.docs = docs;
        this.enabled = enabled;
    }

    Enable(enabled = true)
    {
        this.enabled = enabled;
    }
}
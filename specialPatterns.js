const specialPatterns = [
/*
  {
    check: (html) => html.includes(``),
    extract: (html) => {
      try { return html.split(``)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
*/
  {
    check: (html) => html.includes(`self.__next_f.push([1,"“`),
    extract: (html) => {
      try { return `"` + html.split(`self.__next_f.push([1,"“`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"You`),
    extract: (html) => {
      try { return `You` + html.split(`self.__next_f.push([1,"You`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`[Verse 1]`),
    extract: (html) => {
      try { return `[Verse 1]` + html.split(`[Verse 1]`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"Oh boy`),
    extract: (html) => {
      try { return `Oh boy` + html.split(`self.__next_f.push([1,"Oh boy`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`Verse 1`),
    extract: (html) => {
      try { return `Verse 1` + html.split(`Verse 1`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`[Verse]`),
    extract: (html) => {
      try { return `[Verse]` + html.split(`[Verse]`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"26:T53d,`),
    extract: (html) => {
      try { return html.split(`self.__next_f.push([1,"26:T53d,`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"26:T6f1,`),
    extract: (html) => {
      try { return html.split(`self.__next_f.push([1,"26:T6f1,`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"\\n`),
    extract: (html) => {
      try { return html.split(`self.__next_f.push([1,"\\n`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"[`),
    extract: (html) => {
      try { return `[` + html.split(`self.__next_f.push([1,"[`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"24:T790,`),
    extract: (html) => {
      try { return html.split(`self.__next_f.push([1,"24:T790,`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`self.__next_f.push([1,"Chorus`),
    extract: (html) => {
      try { return `Chorus ` + html.split(`self.__next_f.push([1,"Chorus`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes(`4a4,`),
    extract: (html) => {
      try { return html.split(`4a4,`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  },
  {
    check: (html) => html.includes("日本語 歌詞"),
    extract: (html) => {
      try { return html.split(`self.__next_f.push([1,"\\n`)[1].split(`"])`)[0]; }
      catch(e) { return ""; }
    }
  }
];

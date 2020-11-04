const accountReporter = function(o) {
    //{"B":[{"a":"USDT","wb":"10797.12013827","cw":"10797.12013827"}],"P":[],"m":"FUNDING_FEE"}
    try {
        let m = o.m;
        if ( m == "FUNDING_FEE") {
            return `Funding fee update → ${o.a}:${o.wb} (${o.cw})`;
        }
    } catch(e) {
        return JSON.stringify(o);
    }
    
}

export default accountReporter;
//currently cremello, perlino and smoky black not distinguished, and those + dun not distinguished

const genotypeMap= {
    "EEAACCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEAACCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEAACCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEAACcDD": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EEAACcDd": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EEAACcdd": {
        "desc": "ruunivoikko",
        "baseColor": beige,
        "maneColor": black,
        "stripeColor": null
    },
    "EEAAccDD": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EEAAccDd": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EEAAccdd": {
        "desc": "ruunikko",
        "baseColor": brown,
        "maneColor": black,
        "stripeColor": null
    },
    "EEAaCCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEAaCCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEAaCCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEAaCcDD": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EEAaCcDd": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EEAaCcdd": {
        "desc": "ruunivoikko",
        "baseColor": beige,
        "maneColor": black,
        "stripeColor": null
    },
    "EEAaccDD": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EEAaccDd": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EEAaccdd": {
        "desc": "ruunikko",
        "baseColor": brown,
        "maneColor": black,
        "stripeColor": null
    },
    "EEaaCCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEaaCCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEaaCCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EEaaCcDD": {
        "desc": "mustanvoikko + hallakko", 
        "baseColor": greybrown,
        "maneColor": almostblack,
        "stripeColor": greybrown
    },
    "EEaaCcDd": {
        "desc": "mustanvoikko + hallakko", 
        "baseColor": greybrown,
        "maneColor": almostblack,
        "stripeColor": greybrown
    },
    "EEaaCcdd": {
        "desc": "mustanvoikko",
        "baseColor": darkbrown,
        "maneColor": black,
        "stripeColor": null
    },
    "EEaaccDD": {
        "desc": "hiirakko",
        "baseColor": grey,
        "maneColor": black,
        "stripeColor": grey
    },
    "EEaaccDd": {
        "desc": "hiirakko",
        "baseColor": grey,
        "maneColor": black,
        "stripeColor": grey
    },
    "EEaaccdd": {
        "desc": "musta",
        "baseColor": almostblack,
        "maneColor": black,
        "stripeColor": null
    },
    "EeAACCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeAACCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeAACCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeAACcDD": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EeAACcDd": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EeAACcdd": {
        "desc": "ruunivoikko",
        "baseColor": beige,
        "maneColor": black,
        "stripeColor": null
    },
    "EeAAccDD": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EeAAccDd": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EeAAccdd": {
        "desc": "ruunikko",
        "baseColor": brown,
        "maneColor": black,
        "stripeColor": null
    },
    "EeAaCCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeAaCCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeAaCCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeAaCcDD": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EeAaCcDd": {
        "desc": "valkohallakko",
        "baseColor": lightgrey,
        "maneColor": darkgrey,
        "stripeColor": lightgrey
    },
    "EeAaCcdd": {
        "desc": "ruunivoikko",
        "baseColor": beige,
        "maneColor": black,
        "stripeColor": null
    },
    "EeAaccDD": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EeAaccDd": {
        "desc": "ruunihallakko",
        "baseColor": lighterbeige,
        "maneColor": darkbrown,
        "stripeColor": lighterbeige
    },
    "EeAaccdd": {
        "desc": "ruunikko",
        "baseColor": brown,
        "maneColor": black,
        "stripeColor": null
    },
    "EeaaCCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeaaCCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeaaCCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "EeaaCcDD": {
        "desc": "mustanvoikko + hallakko", 
        "baseColor": greybrown,
        "maneColor": almostblack,
        "stripeColor": greybrown
    },
    "EeaaCcDd": {
        "desc": "mustanvoikko + hallakko", 
        "baseColor": greybrown,
        "maneColor": almostblack,
        "stripeColor": greybrown
    },
    "EeaaCcdd": {
        "desc": "mustanvoikko",
        "baseColor": darkbrown,
        "maneColor": black,
        "stripeColor": null
    },
    "EeaaccDD": {
        "desc": "hiirakko",
        "baseColor": grey,
        "maneColor": black,
        "stripeColor": grey
    },
    "EeaaccDd": {
        "desc": "hiirakko",
        "baseColor": grey,
        "maneColor": black,
        "stripeColor": grey
    },
    "Eeaaccdd": {
        "desc": "musta",
        "baseColor": almostblack,
        "maneColor": black,
        "stripeColor": null
    },
    "eeAACCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAACCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAACCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAACcDD": {
        "desc": "keltahallakko",
        "baseColor": lighterbeige,
        "maneColor": beige, //maybe lighten
        "stripeColor": lighterbeige
    },
    "eeAACcDd": {
        "desc": "keltahallakko",
        "baseColor": lighterbeige,
        "maneColor": beige, //maybe lighten
        "stripeColor": lighterbeige
    },
    "eeAACcdd": {
        "desc": "voikko",
        "baseColor": beige,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAAccDD": {
        "desc": "punahallakko",
        "baseColor": lighterbeige,
        "maneColor": reddishbeige,
        "stripeColor": lighterbeige
    },
    "eeAAccDd": {
        "desc": "punahallakko",
        "baseColor": lighterbeige,
        "maneColor": reddishbeige,
        "stripeColor": lighterbeige
    },
    "eeAAccdd": {
        "desc": "rautias",
        "baseColor": brown,
        "maneColor": darkerbrown,
        "stripeColor": null
    },
    "eeAaCCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAaCCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAaCCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAaCcDD": {
        "desc": "keltahallakko",
        "baseColor": lighterbeige,
        "maneColor": beige, //maybe lighten
        "stripeColor": lighterbeige
    },
    "eeAaCcDd": {
        "desc": "keltahallakko",
        "baseColor": lighterbeige,
        "maneColor": beige, //maybe lighten
        "stripeColor": lighterbeige
    },
    "eeAaCcdd": {
        "desc": "voikko",
        "baseColor": beige,
        "maneColor": white,
        "stripeColor": null
    },
    "eeAaccDD": {
        "desc": "punahallakko",
        "baseColor": lighterbeige,
        "maneColor": reddishbeige,
        "stripeColor": lighterbeige
    },
    "eeAaccDd": {
        "desc": "punahallakko",
        "baseColor": lighterbeige,
        "maneColor": reddishbeige,
        "stripeColor": lighterbeige
    },
    "eeAaccdd": {
        "desc": "rautias",
        "baseColor": brown,
        "maneColor": darkerbrown,
        "stripeColor": null
    },
    "eeaaCCDD": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeaaCCDd": {
        "desc": "valkovoikko, hallakko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeaaCCdd": {
        "desc": "valkovoikko",
        "baseColor": offwhite,
        "maneColor": white,
        "stripeColor": null
    },
    "eeaaCcDD": {
        "desc": "keltahallakko",
        "baseColor": lighterbeige,
        "maneColor": beige, //maybe lighten
        "stripeColor": lighterbeige
    },
    "eeaaCcDd": {
        "desc": "keltahallakko",
        "baseColor": lighterbeige,
        "maneColor": beige, //maybe lighten
        "stripeColor": lighterbeige
    },
    "eeaaCcdd": {
        "desc": "voikko",
        "baseColor": beige,
        "maneColor": white,
        "stripeColor": null
    },
    "eeaaccDD": {
        "desc": "punahallakko",
        "baseColor": lighterbeige,
        "maneColor": reddishbeige,
        "stripeColor": lighterbeige
    },
    "eeaaccDd": {
        "desc": "punahallakko",
        "baseColor": lighterbeige,
        "maneColor": reddishbeige,
        "stripeColor": lighterbeige
    },
    "eeaaccdd": {
        "desc": "rautias",
        "baseColor": brown,
        "maneColor": darkerbrown,
        "stripeColor": null
    }
}
let word;

const words = ["aberration", "abstemious", "acumen", "alacrity", "amalgamate", "amenable", "anachronism", "anomaly", "antipathy", "approbation", "arduous", "asceticism", "assiduous", "astringent", "atrophy", "austere", "avarice", "axiom", "bolster", "burgeon", "burnish", "cacophony", "capricious", "castigate", "catalyst", "caustic", "chicanery", "circumlocution", "circumscribe", "circumspect", "coalition", "complaisance", "connoisseur", "contentious", "contrite", "conundrum", "convoluted", "corporeal", "credulous", "culpable", "debacle", "decorum", "deference", "derision", "desiccate", "didactic", "dilatory", "diligent", "dint", "dirge", "disabuse", "discordant", "discretion", "disinterested", "disparage", "disparate", "dissemble", "dissonance", "dogmatic", "ebullience", "eclectic", "efficacy", "effrontery", "elegy", "emollient", "empirical", "encumber", "enfranchise", "ephemeral", "equivocate", "erudite", "esoteric", "eugenic", "exacerbate", "exculpate", "exigent", "exonerate", "extant", "extemporaneous", "extirpate", "facetious", "fallacious", "fervid", "filibuster", "flout", "foment", "forestall", "frugal", "garrulous", "goad", "grandiloquent", "gregarious", "harangue", "hedonism", "histrionic", "hyperbole", "iconoclast", "idiosyncrasy", "impecunious", "impinge", "inchoate", "incipient", "incongruous", "incontrovertible", "inculcate", "indefatigable", "indolent", "inert", "ingratiate", "inimical", "inscrutable", "insinuate", "insipid", "intransigent", "inundate", "inveigle", "irascible", "laconic", "largess", "laud", "libertine", "lionize", "lurid", "magnanimity", "maladroit", "malediction", "malleable", "martial", "maverick", "mendacity", "mendicant", "meretricious", "modicum", "mollify", "morose", "mundane", "nebulous", "neologism", "nefarious", "noxious", "obdurate", "obfuscate", "obsequious", "obstreperous", "obtuse", "onerous", "opprobrium", "oscillation", "paean", "paragon", "pariah", "partisan", "pedantic", "pellucid", "penurious", "peremptory", "perfidious", "perfunctory", "pernicious", "perspicacious", "peruse", "pervade", "phlegmatic", "pith", "plaintive", "plethora", "polemical", "pragmatic", "prattle", "precept", "precipitate", "precursor", "predilection", "prepossess", "prescient", "prevaricate", "pristine", "probity", "proclivity", "profligate", "profuse", "proliferate", "propensity", "proscribe", "punctilious", "pungent", "quaff", "querulous", "quiescent", "rarefy", "recalcitrant", "recondite", "redoubtable", "relegate", "renege", "repudiate", "rescind", "reticent", "reverent", "rife", "sagacious", "salubrious", "sanguine", "satiate", "scurrilous", "solicitous", "solvent", "sophistry", "soporific", "sordid", "specious", "spurious", "squander", "static", "stoic", "stupefy", "stymie", "succinct", "suffuse", "superfluous", "supplicate", "surfeit", "sycophant", "taciturn", "tantamount", "tedious", "temerity", "tenacious", "tirade", "torpid", "tortuous", "tout", "tractable", "truculence", "ubiquitous", "unbridled", "unwitting", "utilitarian", "venal", "veracious", "vexation", "vigilant", "vilify", "virulent", "viscous", "vituperate", "voluble", "waver"];

document.getElementById('btn').addEventListener('click',function(){
    num=Math.floor(Math.random()*(248))
    word=words[num]

    let voice=new SpeechSynthesisUtterance()
    voice.text=word
    speechSynthesis.speak(voice)

})

document.getElementById('sub').addEventListener('click',function(){
    if(document.getElementById('inp').value==word){
        alert("CORRECT !!")
    }

    else{
        alert(`INCORRECT \n It was ${word}`)
    }

    document.getElementById('inp').value=''

})

document.getElementById('speak').addEventListener('click',function(){
    let voice=new SpeechSynthesisUtterance()
    voice.text=word
    speechSynthesis.speak(voice)
})
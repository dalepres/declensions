const wordslist = [
    ["puella","girl","puella","puellae","puellae","puellam","puellā","puellae"],
    ["rosa","rose","rosa","rosae","rosae","rosam","rosā","rosae"],
    ["porta","gate","porta","portae","portae","portam","portā","portae"],
    ["nauta","sailor","nauta","nautae","nautae","nautam","nautā","nautae"],
    ["amica","friend (female)","amica","amicae","amicae","amicam","amicā","amicae"],
    ["aqua","water","aqua","aquae","aquae","aquam","aquā","aquae"],
    ["terra","earth","terra","terrae","terrae","terram","terrā","terra"],
    ["filia","daughter","filia","filiae","filiae","filiam","filiā","filiae"],
    ["puellula","little girl","puellula","puellulae","puellulae","puellulam","puellulā","puellulae"],
    ["amicus","friend (male)","amicus","amici","amico","amicum","amico","amici"],
    ["vita","life","vita","vitae","vitae","vitam","vitā","vitae"],
    ["poeta","poet","poeta","poetae","poetae","poetam","poetā","poetae"],
    ["agricola","farmer","agricola","agricolae","agricolae","agricolam","agricolā","agricolae"],
    ["insula","island","insula","insulae","insulae","insulam","insulā","insulae"],
    ["servus","slave (male)","servus","servi","servo","servum","servo","servi"],
    ["femina","woman","femina","feminae","feminae","feminam","feminā","feminae"],
    ["poena","punishment","poena","poenae","poenae","poenam","poenā","poenae"],
    ["patria","homeland","patria","patriae","patriae","patriam","patriā","patriae"],
    ["via","road","via","viae","viae","viam","viā","viae"],
    ["insidiae","ambush","insidiae","insidiarum","insidiis","insidias","insidiis","insidiis"]        
];

//  āēīōū	ĀĒĪŌŪ


export function GetWord(index) {
    return (wordslist[index]);
}


/*

class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
    static {
      console.log('Class static initialization block called');
    }
  }
  
  console.log(ClassWithStaticMethod.staticProperty);
  // Expected output: "someValue"
  console.log(ClassWithStaticMethod.staticMethod());
  // Expected output: "static method has been called."
  */

  
function ProfanityChecker(phrase) {
    var i = 0;
    var parts = phrase.split(" ");

    for (var a = 0; a < parts.length; a++) {

        for (var b = 0; b < list.length; b++) {

            if (parts[a].indexOf(list[b]) > -1) {
                //found
                return true;
            }
        }
    }
    return false;
}

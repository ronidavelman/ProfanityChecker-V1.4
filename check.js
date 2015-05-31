function ProfanityChecker(phrase) {
    var i = 0;
    var parts = phrase.split(" ");

    for (var a = 0; a < parts.length; a++) {

        for (var b = 0; b < list.length; b++) {

            if (parts[a] == list[b]) {
                //found
                return true;
            }
        }
    }
    return false;
}

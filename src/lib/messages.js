const color = "\x1b[1;35m";
const underline = "\x1b[94;4m";
const normal = "\x1b[0m";
export const introMessage = [
  "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
  "|                                                                          |",
  "|    Welcome to the High Performance Computing (HPC) Linux Course          |",
  "|    MRC Unit The Gambia @ LSHTM                                           |",
  "|    15-16th October 2026                                                  |",
  "|    9:00 AM - 12:00 PM                                                    |",
  "|    GAM Seminar Room F001                                                 |",
  "|                                                                          |",
  "|    No registration required                                              |",
  "|                                                                          |",
  "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
  "",
  "",
];
export const errorMessage = [
  color + "CheerpX could not start" + normal,
  "",
  "Check the DevTools console for more information",
  "",
  "CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
  "",
  "Give it a try from a desktop version / another browser!",
  "",
  "CheerpX internal error message is:",
  "",
];
export const unexpectedErrorMessage = [
  color + "WebVM encountered an unexpected error" + normal,
  "",
  "Check the DevTools console for further information",
  "",
  "Please consider reporting a bug!",
  "",
  "CheerpX internal error message is:",
  "",
];

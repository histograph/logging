const config = require('histograph-config');
const moment = require('moment');


// const levels = [
//   'fatal',
// 	'error',
//   'warn',
// 	'info',
// 	'debug'
// ]

const DEBUG="DEBUG";
const INFO="INFO";
const WARN="WARN";
const ERROR="ERROR";
const FATAL="FATAL";

const SEP = " "


function format(label, calling_module, msg){
  console.log(moment().format('DD-MM-YYYY HH:MM:SS') + SEP + label + SEP + calling_module + SEP + msg);
}

function Log(calling_module) {

  const level = config[calling_module].logLevel;

  switch(level) {
    case 'fatal':

      this.fatal = function(msg) {format(FATAL,calling_module,msg)};
      this.error = function(msg) {};
      this.warn = function(msg) {};
      this.info = function(msg) {};
      this.debug = function(msg) {};

      break;
    case 'error':

      this.fatal = function(msg) {format(FATAL,calling_module,msg)};
      this.error = function(msg) {format(ERROR,calling_module,msg)};
      this.warn = function(msg) {};
      this.info = function(msg) {};
      this.debug = function(msg) {};

      break;
    case 'warn':

      this.fatal = function(msg) {format(FATAL,calling_module,msg)};
      this.error = function(msg) {format(ERROR,calling_module,msg)};
      this.warn = function(msg) {format(WARN,calling_module,msg)};
      this.info = function(msg) {};
      this.debug = function(msg) {};

      break;
    case 'info':

      this.fatal = function(msg) {format(FATAL,calling_module,msg)};
      this.error = function(msg) {format(ERROR,calling_module,msg)};
      this.warn = function(msg) {format(WARN,calling_module,msg)};
      this.info = function(msg) {format(INFO,calling_module,msg)};
      this.debug = function(msg) {};

      break;

    case 'debug':

      this.fatal = function(msg) {format(FATAL,calling_module,msg)};
      this.error = function(msg) {format(ERROR,calling_module,msg)};
      this.warn = function(msg) {format(WARN,calling_module,msg)};
      this.info = function(msg) {format(INFO,calling_module,msg)};
      this.debug = function(msg) {format(DEBUG,calling_module,msg)};

      break;

    default:
      throw new Error("Unknown logLevel for module: " + calling_module + ", level: " + level);

  }


}


module.exports=Log

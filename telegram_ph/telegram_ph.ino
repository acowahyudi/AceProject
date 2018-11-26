//analog pin 
#define analogInPin A0  //sambungkan kabel hitam (output) ke pin A0

//variable
int sensorValue = 0;        //ADC value from sensor
float outputValue = 0.0;        //pH value after conversion
int sensorValue1 = 0;        //ADC value from sensor
float outputValue1 = 0.0;    //Soil Moisture value after conversion
//String ph;  //set float to string
String RH;


////////////////////////////////deklarasi ph tanah
#include <ArduinoJson.h>
#include <TelegramBot.h>
#include <TelegramKeyboard.h>
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <ESP8266HTTPClient.h>

 
// Initialize Wifi connection to the router  
const char* ssid  = "NNP.IoT";
const char* password = "ilham123yes";
 
// Initialize your Telegram BOT API  
const char BotToken[] = "768656150:AAHo5fhj09eqMtp7AMzlyxBUNYt4zsHb4rU";
 
WiFiClientSecure net_ssl;
TelegramBot bot (BotToken, net_ssl);


void setup() {
 // void setup for tele
 Serial.begin(115200);  
 while (!Serial) {}  //Start running when the serial is open 
 delay(3000);  
 // attempt to connect to Wifi network:  
 Serial.print("Connecting Wifi: ");  
 Serial.println(ssid);  
 WiFi.begin(ssid, password);
 while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
 }
 Serial.println("");  
 Serial.println("WiFi connected");  
 bot.begin();
 message m = bot.getUpdates();
 bot.sendMessage(m.chat_id, "Alat Sudah On");
 

}

void loop() {
//==================input data sensor pH==================================//
  //read the analog in value:
  sensorValue = analogRead(analogInPin);

  //Mathematical conversion from ADC to pH
  //rumus didapat berdasarkan datasheet 
  outputValue = (-0.0693*sensorValue)+7.3855;
  //ph=String(outputValue);

  //print the results to the serial monitor:
  Serial.print("sensor ADC= ");
  Serial.print(sensorValue);
  Serial.print("  output Ph= ");
  Serial.println(outputValue);

//==================input data sensor RH==================================//
  // read the analog in value:z
  sensorValue1 = analogRead(analogInPin);
  
  //Mathematical conversion from ADC to Soil Moisture
  //rumus didapat berdasarkan datasheet 
  outputValue1 = (0.109*sensorValue1)+0.575;
  //RH=String(outputValue1);

  //print the results to the serial monitor:
  Serial.print("sensor ADC= ");
  Serial.print(sensorValue1);
  Serial.print("  output Soil Moisture = ");
  Serial.println(outputValue1);

  //=================push data ke webserver=============================//

  //===================proses pengiriman di telegram==================================//
  message m = bot.getUpdates(); // Read new messages  
  if (m.text.equals("Status")) //Perintah dari telegram ke perangkat
  {    
  Serial.println("pesan dikirim");  
  bot.sendMessage(m.chat_id, "nilai pH terbaru   : "+(m.chat_id, String(outputValue)));  //Balasan dari perangkat ke Bot Telegram
  bot.sendMessage(m.chat_id, "nilai RH terbaru   : "+(m.chat_id, String(outputValue1)));  //Balasan dari perangkat ke Bot Telegram
  
  
  }
  else if (m.text.equals("Info")) //Perintah dari telegram ke perangkat
  {    
  Serial.println("pesan dikirim");  
  bot.sendMessage(m.chat_id, "ketik (Info) untuk informasi.                                        ketik (Satus) untuk data tanah");  //Balasan dari perangkat ke Bot Telegram
  
  }
   delay(10000);

}

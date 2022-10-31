# Qatar World Cup Map

The App displays the countries of the Qatar World Cup through Google Maps. Longitude and latitude are used to determine where the Pin will be inserted.

<img src="https://drive.google.com/uc?export=view&id=1kIXzU5Kg7h4YnP3CG_1GcNsOUSPuh0j_" width="200">

# Setup

**Location permissions must be enabled!**

To use the app, enter the Google key in the following directory:

`android\app\src\main\AndroidManifest.xml`

```xml 
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```

**Example:** https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md#specify-your-google-maps-api-key

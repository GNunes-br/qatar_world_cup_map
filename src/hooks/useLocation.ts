import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';

export default () => {
  const [error, setError] = useState<string>('');
  const [coords, setCoords] = useState<{ latitude: number; longitude: number }>(
    { latitude: -20.398259, longitude: -43.507726 },
  );

  const [hasPermissions, setHasPermissions] = useState(false);

  useEffect(() => {
    if (hasPermissions) {
      Geolocation.getCurrentPosition(
        position => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        e => {
          setError(e.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        },
      );
    }
  }, [hasPermissions]);

  useEffect(() => {
    (async function getPermissions() {
      try {
        const permissions = await requestMultiple([
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
        ]);

        const accessFineLocation =
          permissions[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
        const accessBackgroundLocation =
          permissions[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION];

        if (Platform.Version < 29) {
          if (accessFineLocation === 'granted') {
            setHasPermissions(true);
          } else {
            throw new Error('Usuário não aceitou solicitação de uso do GPS');
          }
        } else {
          if (
            accessFineLocation === 'granted' &&
            accessBackgroundLocation === 'granted'
          ) {
            setHasPermissions(true);
          } else {
            throw new Error('Usuário não aceitou solicitação de uso do GPS');
          }
        }
      } catch (e) {
        setError(`${e}`);
      }
    })();
  }, []);

  return { coords, error };
};

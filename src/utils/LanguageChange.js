import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import Languages from '../common/Languages';
import { setLocalization } from '../store/slices/localizations';

import store from './../store';

export default LanguageChange = (language) => {
    store.dispatch(setLocalization(language));
    if (language === Languages.arabic) {
        I18nManager.forceRTL(true);
    } else {
        I18nManager.forceRTL(false);
    }
    setTimeout(() => {
        RNRestart.Restart();
    }, 100);
}
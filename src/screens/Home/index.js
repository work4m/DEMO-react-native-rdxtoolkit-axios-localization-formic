import React from 'react';
import {
    Text, View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import LanguageChange from '../../utils/LanguageChange';
import Languages from '../../common/Languages';

const Home = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text onPress={() => {
               LanguageChange(Languages.english);
            }}>English</Text>
            <Text>{t('Hello')}</Text>
            <Text onPress={() => {
               LanguageChange(Languages.arabic);
            }}>Arabic</Text>
        </View>
    )
}

export default Home;

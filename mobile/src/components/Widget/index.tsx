import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet';

import { styles } from './styles';
import { theme } from '../../theme';

export function Widget() {

  const BottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    BottomSheetRef.current?.expand();
  }
  return (
    <>
    <TouchableOpacity
      style={styles.button}
      onPress={handleOpen}
    >
      <ChatTeardropDots
        size={24}
        weight="bold"
        color={theme.colors.text_on_brand_color}
      />
    </TouchableOpacity>

    <BottomSheet
      ref={BottomSheetRef}
      snapPoints={[1,280]}
    >

    </BottomSheet>
    </>
  );
}
import { lockerStackStyle, chipStyles } from './LockerChipSelector.styles';
import { Chip, Stack, Divider } from '@mui/material';
import { LOCKER_TEXT } from '../../constants/hardText';
import SharedTypography from '../shared/Text/SharedTypography';
import { LOCKER_LOCATION } from '../../utils/textTemplates';
import { TEXT_VARIANTS } from '../../constants/types';

const LockerSelector = ({
  availableLockers,
  selectedLockerId,
  setSelectedLockerId,
}) => {
  if (!availableLockers?.length) return null;

  return (
    <>
      <Divider />

      <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
        {LOCKER_TEXT.SELECT_A_LOCKER}
      </SharedTypography>

      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
        sx={lockerStackStyle}
      >
        {availableLockers.map(({ _id, lockerNumber, location }) => (
          <Chip
            key={_id}
            label={LOCKER_LOCATION.LOCKER_LABEL(lockerNumber, location)}
            clickable
            variant="outlined"
            style={chipStyles(selectedLockerId, _id)}
            onClick={() => setSelectedLockerId(_id)}
          />
        ))}
      </Stack>
    </>
  );
};

export default LockerSelector;

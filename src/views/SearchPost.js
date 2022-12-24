import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SecurityIcon from '@mui/icons-material/Security';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import KeyIcon from '@mui/icons-material/Key';
import PetsIcon from '@mui/icons-material/Pets';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import TvIcon from '@mui/icons-material/Tv';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Radio, RadioGroup } from '@mui/material';

const MIN_DISTANCE = 1;

const marks = [
    {
        value: 0,
        label: '0 tr',
    },
    {
        value: 30,
        label: '15 tr+',
    },
];

function priceText(value) {
    return value !== 30 ? `${value / 2} tr` : '15 tr+';
}

export const SearchPost = () => {
    const [price, setPrice] = React.useState([0, 30]);

    const handleChangePrice = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < MIN_DISTANCE) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 30 - MIN_DISTANCE);
                setPrice([clamped, clamped + MIN_DISTANCE]);
            } else {
                const clamped = Math.max(newValue[1], MIN_DISTANCE);
                setPrice([clamped - MIN_DISTANCE, clamped]);
            }
        } else {
            setPrice(newValue);
        }
    };

    const handleClickTI = (item) => {
        item.currentTarget.classList.toggle('active');
    };

    return (
        <React.Fragment>
            <div className="m-card">
                <div className="d-flex justify-content-between mb-3">
                    <h4 className="font-weight-bold">Bộ lọc</h4>
                    <button className="btn btn-primary">Áp dụng</button>
                </div>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Khoảng giá</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="pl-5 pr-5 mt-3">
                        <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={price}
                            onChange={handleChangePrice}
                            valueLabelDisplay="on"
                            getAriaValueText={priceText}
                            valueLabelFormat={priceText}
                            marks={marks}
                            step={1}
                            min={0}
                            max={30}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Tiện ích</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="box__container">
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="parking_situation"
                        >
                            <TwoWheelerIcon />
                            <span className="button__name">Chỗ để xe</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="air_conditioner"
                        >
                            <AspectRatioIcon />
                            <span className="button__name">Máy lạnh</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="share_home_as_landlord"
                        >
                            <KeyIcon />
                            <span className="button__name">
                                Không chung chủ
                            </span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_pets_allowed"
                        >
                            <PetsIcon />
                            <span className="button__name">Thú cưng</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_kitchen"
                        >
                            <RestaurantIcon />
                            <span className="button__name">Nhà bếp</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_bed"
                        >
                            <AirlineSeatFlatIcon />
                            <span className="button__name">Giường ngủ</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_bathroom"
                        >
                            <LocalDrinkIcon />
                            <span className="button__name">WC riêng</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_tivi"
                        >
                            <TvIcon />
                            <span className="button__name">TV</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_closet"
                        >
                            <CalendarViewMonthIcon />
                            <span className="button__name">Tủ đồ</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_refrigerator"
                        >
                            <KitchenIcon />
                            <span className="button__name">Tủ lạnh</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="room_washing_machine"
                        >
                            <LocalLaundryServiceIcon />
                            <span className="button__name">Máy giặt</span>
                        </div>
                        <div
                            className="box__button"
                            onClick={handleClickTI}
                            data-body="security_guard"
                        >
                            <SecurityIcon />
                            <span className="button__name">Bảo vệ</span>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Loại phòng</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel
                                value="Shared"
                                control={<Checkbox />}
                                label="Phòng ở ghép"
                            />
                            <FormControlLabel
                                value="NotShared"
                                control={<Checkbox />}
                                label="Phòng cho thuê"
                            />
                            <FormControlLabel
                                value="Apartment"
                                control={<Checkbox />}
                                label="Căn hộ"
                            />
                            <FormControlLabel
                                value="Dormitory"
                                control={<Checkbox />}
                                label="Homestay"
                            />
                            <FormControlLabel
                                value="House"
                                control={<Checkbox />}
                                label="Nhà nguyên căn"
                            />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Giới tính</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <RadioGroup row>
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Nam"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Nữ"
                            />
                            <FormControlLabel
                                value="any"
                                control={<Radio />}
                                label="Nam và nữ"
                            />
                        </RadioGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Vị trí</Typography>
                    </AccordionSummary>
                    <AccordionDetails>Vị trí</AccordionDetails>
                </Accordion>
            </div>
            <div className="m-card">
                <h4 className="font-weight-bold">Kết quả</h4>
            </div>
        </React.Fragment>
    );
};
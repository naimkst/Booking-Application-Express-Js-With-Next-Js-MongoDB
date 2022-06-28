import Hotel from "../models/Hotels.js";

//Create Hotel
export const createHotel = async (req, res, next) => {
  try {
    const hotel = await new Hotel(req.body).save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//Update Hotel
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};

//Delete Hotel
export const deleteHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};

//Get Hotel By ID
export const getByIdHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

//Get All Hotels
export const getHotels = async (req, res, next) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (error) {
    next(error);
  }
};

//Get Count By City
export const countByCity = async (req, res, next) => {
  const cities = req.query.cites.split(",");
  try {
    const lists = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({ city: city });
    }));
    res.status(200).json(lists);
  } catch (error) {
    next(error);
  }
};

//Get Count By Type
export const countByType = async (req, res, next) => {
  const types = req.query.type.split(",");
  try {
    const lists = await Promise.all(types.map(type => {
      return Hotel.countDocuments({ city: type });
    }));
    res.status(200).json(lists);
  } catch (error) {
    next(error);
  }
};


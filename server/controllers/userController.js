import { User } from "../models/UserModel.js";

// get user by id
export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// get user's friends
export const getUserFriends = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const friends = await Promise.all(
      user.friends.map((friendId) => User.findByfriendId(friendId))
    );
    const formattedFriends = friends.map((friend) => {
      return { ...friend };
    });

    res.status(200).json(formattedFriends);
  } catch (error) {
    next(error);
  }
};

// add or remove user
export const addRemoveUser = async (req, res, next) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== userId);
    } else {
      user.friends.push(friendId);
      friend.friends.push(userId);
    }
    await user.save();
    await friend.save();
    const friends = await Promise.all(
      user.friends.map((friendId) => User.findByfriendId(friendId))
    );
    const formattedFriends = friends.map((friend) => {
      return { ...friend };
    });
    res.status(200).json(formattedFriends);
  } catch (error) {
    next(error);
  }
};

const enhance = item => {
  switch (++item.enhancement) {
    case 16:
      item.prefix = "[PRI]";
      break;
    case 17:
      item.prefix = "[DUO]";
      break;
    case 18:
      item.prefix = "[TRI]";
      break;
    case 19:
      item.prefix = "[TET]";
      break;
    case 20:
      item.prefix = "[PEN]";
      break;
    default:
      item.prefix = `[+${item.enhancement}]`;
  }
};

const diminish = item => {
  switch (item.enhancement > 16 ? --item.enhancement : item.enhancement) {
    case 19:
      item.prefix = "[TET]";
      break;
    case 18:
      item.prefix = "[TRI]";
      break;
    case 17:
      item.prefix = "[DUO]";
      break;
    case 16:
      item.prefix = "[PRI]";
      break;
    case 0 :
      item.prefix = "";
      break;
    default:
      item.prefix = `[+${item.enhancement}]`;
  }
};

module.exports.success = item => {
  if (item.enhancement < 15) {
    if (item.durability < 25) {
      throw new Error("This item should be repaired.");
    } else {
      enhance(item);
    }
  } else {
    if (item.durability < 10) {
      throw new Error("This item should be repaired.");
    } else {
      enhance(item);
    }
  }
  return item;
};

module.exports.fail = item => {
  diminish(item);
  item.durability -= item.enhancement < 15 ? 5 : 10;
  return item;
}

module.exports.repair = item => ({ ...item, durability: 100 });

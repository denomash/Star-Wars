const getInitials = (name: string) => {
  let initials: Array<string> = name.split(" ");

  return (
    `${initials[0].charAt(0)}` +
    `${initials.length > 1 ? initials[1].charAt(0) : ""}`
  );
};

export default getInitials;

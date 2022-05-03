export const getCurrentSeason = () => {
    const currentMonth = new Date().getMonth();

    if (currentMonth === 11 || currentMonth < 2) return 0;
    if (currentMonth > 1 && currentMonth < 6) return 1;
    if (currentMonth > 5 && currentMonth < 9) return 2;
    if (currentMonth > 8 && currentMonth < 11) return 3;

    return 0;
};

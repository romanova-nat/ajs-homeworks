export function getPlayerStatus(player) {
    const { health } = player;

    if (health > 50) {
        return 'healthy';
    } else if (health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}
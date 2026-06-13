/**
 * Filter portfolio items by technology.
 * Complexity: O(n * t) where n = number of items, t = avg tech array length.
 * Could be O(n) if we used a pre-built inverted index.
 */
export function filterByTechnology(items, tech) {
    return items.filter((item) =>
        item.technologies.some((t) => t.toLowerCase() === tech.toLowerCase())
    );
}

/**
 * Search items by keyword in title or description.
 * Complexity: O(n * k) where k is average string length (simple includes check).
 */
export function searchItems(items, query) {
    const lowerQuery = query.toLowerCase();
    return items.filter(
        (item) =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery)
    );
}
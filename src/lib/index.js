// place files you want to import through the `$lib` alias in this folder.

import nasm from "./assets/langs/nasm.svg";
import nasm_compact from "./assets/langs/nasm_compact.svg";
import python from "./assets/langs/python.svg";
import ruby from "./assets/langs/ruby.svg";
import zig from "./assets/langs/zig.svg";
import cpp from "./assets/langs/cpp.svg";
import java from "./assets/langs/java.svg";
import redis from "./assets/langs/redis.svg";

/** @type {Record<string, string>} */
const lang_img_map = {
    "nasm": nasm,
    "nasm_compact": nasm_compact,
    "python": python,
    "ruby": ruby,
    "zig": zig,
    "cpp": cpp,
    "java": java,
    "redis": redis,
}

/**
 * @param {string} lang
 */
export function iconOfLang(lang) {
    return lang_img_map[lang] ?? "Unknown";
}
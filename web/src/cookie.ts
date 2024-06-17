export function getCookie(name: string): string | false {
    const value: any = `; ${document.cookie}`;
    const parts: any = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return false
  }
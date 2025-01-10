import {NextResponse} from 'next/server';

export async function POST(request: Request) {

    if (request.method !== 'POST') {
        return NextResponse.json({message: 'Yêu cầu không hợp lệ, xin vui lòng thử lại!'}, {status: 405});
    }

    const {email, password} = await request.json();

    const response = await fetch(
        'https://airbnbnew.cybersoft.edu.vn/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                tokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjIxLzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0Nzc4NTYwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3OTMzMjAwfQ.HdSOdENfWNAr5C4CemzCCFNsB1DIvQDRBpEJSsOdpA8'
            },
            body: JSON.stringify({email: email, password: password}),
        });

    const data = await response.json();

    if (!response.ok) {
        const {content, statusCode} = data;

        if (statusCode === 400) {
            return NextResponse.json({message: content}, {status: 400});
        }
    }

    if (data.statusCode = 200) {
        return NextResponse.json({
            user: data.content.user,
            token: data.content.token,
            message: 'Đăng nhập thành công.'
        }, {status: 200});
    }

    return NextResponse.json({message: 'Đã gặp lỗi không xác định, xin vui lòng thử lại!'}, {status: 401});
}

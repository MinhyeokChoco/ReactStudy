import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Count = () => {
    // get 요청
    const { data, refetch } = useQuery({
        queryKey: ["count"],
        queryFn: async () => {
            return await axios.get('http://localhost:4000/count')
        },
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        enabled: false,
        retry: 10,
        select: ({ data }) => {
            console.log(data);
            return data + 1;
        }
    })

    // useEffect(() => {
    //     console.log(obj)
    // }, [obj])

    // post 요청, 매개변수로 객체를 받아야 함
    // post 용도로만 사용을 하고 처리 이후에 get으로 재요청 하는 로직은 사용해도 됨
    const mutation = useMutation({
        mutationFn: async (data) => {
            console.log(data)
            return await axios.post('http://localhost:4000/count', { ...data })
        },
        onMutate(data) {
            // mutation 객체 안에 함수를 호출해서 mutation을 호출하면
            // 매개변수로 전달한 내용을 확인할 수 있다.
            console.log(data);
        },
        onError(err) {
            console.log(err);
        },
        onSettled() {
            // 맨 마지막에 호출 되는 내용
            console.log("123");
        },
        onSuccess(data) {
            console.log(data);
        }
    });

    useEffect(() => {
        console.log(data);
    }, [data])

    const handlerClick = () => {
        mutation.mutate({ incrementCount: 2 });
    }

    return (
        <div>
            <button onClick={handlerClick}>클릭</button>
        </div>
    )
}

export default Count

// 동그라미로 그림 그려서 설명해주셨을 때랑
// 오후 1시 이후에 한번 다시 보기
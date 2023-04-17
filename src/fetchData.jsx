import React, { useState, useEffect } from "react";

export const options = {
	method: 'GET',
	headers: {
	}
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();
    return data
}